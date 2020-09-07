var url = require("url");
var fs = require("fs");
var method_check = "check";
var method_add = "add";

exports.main = function (t_url) {
	var result = "";
	var q = url.parse(t_url, true);	
	var get_data = q.query;
	
	if(get_data.method == method_check){
	   if(get_data.numbers != null){
		 var real_numbers = fs.readFileSync((q.pathname + "/all_numbers.txt").substring(1), "utf8");
	   	 var b_real_numbers = real_numbers.split("\n");
		  
		 var b_input_number = get_data.numbers.split(","); 
		   
		  b_input_number.forEach(element => { 
			  if(b_real_numbers.includes(element)){
				 result += element + "<br />";
				}
			}); 
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
	}
	
	if(result == ""){
		result = "No match!";
	}
	
	return result;
};
