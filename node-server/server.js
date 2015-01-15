#! /usr/local/bin/node

var http   = require('http');
var server = http.createServer(function(request, response){
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write('Request ' + request.method + '' + request.url + ' received at ' + new Date());
    response.end();
});

server.listen(1234, function(){
    console.log('Server is listening!');
});
