var http = require('http'),
	fs = require('fs'),
	 ps = require("./params_parser.js"),
	 rd = require("./render_view.js");

	var p = ps.parse;
	var v = rd.render;

http.createServer(function(req,res){
	fs.readFile("./index.html", function(err,html){
		
		if(req.url.indexOf("favicon.ico") > 0){return;}
		
		var parametros = p(req);
		
		var html_string = v(html, parametros);
		
		
		res.writeHead(200,{"Content-Type":"text/html"})
		res.write(html_string);
		res.end();

				  });
}).listen(8080);



