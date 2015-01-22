var http = require('http');

var server = http.createServer(function(req, res)
{
    console.log('Server is listening.');

    res.end('Request ' + req.method + ' ' + req.url + ' received at ' + new Date());
});

server.listen(1234, '127.0.0.1');