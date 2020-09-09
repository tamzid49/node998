var http = require('http');
//var fs = require('fs');
//var url = require('url');
//var path = require('path');

http.createServer(function (req, res) {
	//var q = url.parse(req.url, true);
	//var t_url = q.pathname;
  	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write("sadasdasdasdas");

	/**if(fs.existsSync((t_url + "/index.js").substring(1))){		
		var filename = path.resolve("." + t_url + "/index.js");
		delete require.cache[filename];
		var app_file = require("." + t_url + "/index.js");
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write(app_file.main(req.url));
	}else{
		res.writeHead(404, {'Content-Type': 'text/plain'});
		res.write("Not Found");
		console.log("its null!");
	}
	**/

	res.end();
}).listen(8080);
