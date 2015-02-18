'use strict';

var express = require('express'),
	app = express(),
	proxy = require('./lib/proxy');

global.__cache = {
	requests: true,
	expirationTime: 86400
};
global.__proxy = {
	protocol: 'http:',
	hostname: 'cultiz.com',
	port: 80
};

app.use('/favicon.ico', function(req, res, next){
    res.end();
});

app	.route('/:route')
	.get(proxy.getJSON)
   	.delete(proxy.flush);

app.listen(1234, function(){
	console.log('Listening to port 1234...')
});