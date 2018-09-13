var http = require('http'),
	fs = require('fs');



http.createServer(function(req,res){
	fs.readFile("./index.html", function(err,html){
		
		var html_string = html.toString();
		
		var variables = html_string.match(/[^\{\}]+(?=\})/g);		
		var nombre = "JC";
		// varibles ['nombre']
		
		for(var i = variables.length - 1; i>=0; i--){
			//Los ejecutamos como codigo de javaScript
			//Para obtener el valor de dicha variable
			var values = eval(variables[i]);
			//remplazar el valor con llaves {x} por su valor establecido
			html_string = html_string.replace("{"+variables[i]+"}", values);
		};
		
		res.writeHead(200,{"Content-Type":"text/html"})
		res.write(html_string);
		res.end();

				  });
}).listen(8080);



