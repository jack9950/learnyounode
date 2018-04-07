const http = require('http');
const map = require('through2-map');

const port =  process.argv[2];

var server = http.createServer(function(request,response){

    if (request.method !== 'POST') {
        return result.end('Please use a POST method');
    }

    request.pipe(map(function(chunk){
        return chunk.toString().toUpperCase();
    })).pipe(response)
});

server.listen(port);
