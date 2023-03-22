const http = require("http");
http.createServer((request, response) => {
		response.end("Hello Node !!!!!");
     
	})
	.listen(5000);

console.log('Server running at http://127.0.0.1:5000/');