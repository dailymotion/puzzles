'use strict';

var http = require('http')
  , port = 1234

http.createServer(function(req, res) {
    res.write('Request ' + req.method + ' ' + req.url + ' received at ' + new Date())
    res.end()
}).listen(port)

console.log('Server is listening on http://127.0.0.1:' + port)
