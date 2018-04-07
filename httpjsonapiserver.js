const http = require('http');
const url = require('url');
const port = process.argv[2];

var server = http.createServer(function(request,response){

    if (request.method !== 'GET') {
        return result.end('Please use GET method');
    }

    response.writeHead(200, { 'Content-Type': 'application/json' });

    var userURL = url.parse(request.url, true);

    var date = new Date(userURL.query.iso);

    if (userURL.pathname === '/api/parsetime') {

        var time = {
            hour: date.getHours(),
            minute: date.getMinutes(),
            second: date.getSeconds()
        };

        time = JSON.stringify(time);

        response.write(time);
        response.end();
    }

    if (userURL.pathname === '/api/unixtime') {

        var epoch = {
            unixtime: date.getTime()
        };

        epoch = JSON.stringify(epoch);

        response.write(epoch);

        response.end();
    }
});

server.listen(port);
