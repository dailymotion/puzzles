#! /usr/bin/env node

/*********************************************************************************
*  
*  Objective?
*  
*      Create a NodeJS HTTP server that:
*          1) runs on your local machine on port 1234
*          2) print to console "Server is listening." when server is ready to receive request
*          3) returns this dynamic text as response: Request GET <request_uri> received at <date>
*              Ex: When accessed at http://127.0.0.1:1234/toto, your server should reply:
*              Request GET /toto received at Tue Nov 18 2014 18:42:11 GMT+0100 (CET)
*  
*  Time? Less than 1 hour
*  
*  Number of lines? Less than 20
*  
*  How?
*      http://nodejs.org/api/http.html
*  
*  Lost?
*      Look for:
*          - http.createServer
*          - http.Server.listen
*  
********************************************************************************/

var http = require('http');

var server = http.createServer(function requestListener(req, res)
{
    res.write(['Request', req.method, req.url, 'received at', new Date()].join(' '));
    res.end();
});

// Setup server to listen on port 1234
server.listen(1234, function()
{
    console.log('Server is listening.');
});

// server.on('request',...) below is the same as the callback requestListener above
// server.on('request', function(a, b)
// {
//     console.log('>>>>>>>>>>>>>>>>>>>', a.constructor, b.constructor);
//     res.end();
// });
