function render(html, parametros){
			var nombre = "";
			var html_string = html.toString();		
			var variables = html_string.match(/[^\{\}]+(?=\})/g);

			for(var i = variables.length - 1; i>=0; i--){
				var values = eval(variables[i]);
				html_string = html_string.replace("{"+variables[i]+"}", parametros[variables[i]]);
			};
			return html_string;

}

module.exports.render = render;