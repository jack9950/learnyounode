let http = require('http');
let fs = require('fs');

let port = Number(process.argv[2]);
let file = process.argv[3];


server = http.createServer(function(request, response){
	
	response.writeHead(200, {'content-type': 'text/plain'})
	
	fileStream = fs.createReadStream(file)
	fileStream.pipe(response)
});
server.listen(port)