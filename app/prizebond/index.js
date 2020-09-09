var url = require("url");
var fs = require("fs");
var method_check = "check";
var method_add = "add";
var method_list = "list";
var method_update = "update";


exports.main = function (t_url) {
	var result = "";
	var q = url.parse(t_url, true);	
	var get_data = q.query;
	
	if(get_data.method == method_check){
	   if(get_data.numbers != null){
		 var real_numbers = fs.readFileSync((q.pathname + "/all_numbers.txt").substring(1), "utf8");
	   	 var b_real_numbers = real_numbers.split("\n");
		  
		 var b_input_number = get_data.numbers.split(","); 
		   result += "Total numbers: " + b_input_number.length + "<br />";
		   
		   var t_r = "";
		   var count_match = 0;
		  b_input_number.forEach(element => { 
			  if(b_real_numbers.includes(element)){
				  count_match++;
				 t_r += element + "<br />";
				}
			}); 
		   result += "Match: " + count_match + "<br /><hr />";
		   result += t_r;
		   
		}else{
			//no number input
		}
		
		
   	}else if(get_data.method == method_add){
		if(get_data.numbers != null){
			var b_input_number = get_data.numbers.split(","); 
			var nums_to_add = "";
			b_input_number.forEach(element => { 
				nums_to_add += element + "\n";
			}); 
			
			fs.appendFile((q.pathname + "/all_numbers.txt").substring(1), nums_to_add, function (err) {});
			result = "Numbers added!";
		}
		
		
	}else if(get_data.method == method_list){
		var real_numbers = fs.readFileSync((q.pathname + "/all_numbers.txt").substring(1), "utf8");
		var b_real_numbers = real_numbers.split("\n");
		result += "Total numbers: " + (b_real_numbers.length - 1) + "<br /><hr />";
		
		  var rrr = "";
		 
		b_real_numbers.forEach(element => { 
			  if(b_real_numbers.includes(element)){
				  count_match++;
				 rrr += element + "<br />";
				}
			}); 
		result += rrr;
		
		
	}else if(get_data.method == method_update){
		if(get_data.numbers != null){
			fs.unlink((q.pathname + "/all_numbers.txt").substring(1), function (err) {});
			
			var b_input_number = get_data.numbers.split(","); 
			var nums_to_add = "";
			b_input_number.forEach(element => { 
				nums_to_add += element + "\n";
			}); 
			
			fs.appendFile((q.pathname + "/all_numbers.txt").substring(1), nums_to_add, function (err) {});
			result = "Numbers updated!";
		}
		
		
	}else{
		var home_html = fs.readFileSync((q.pathname + "/home.html").substring(1), "utf8");
		result = home_html;
	}
	
		
	
	if(result == ""){
		result = "Nothing!";
	}
	
	return result;
};
