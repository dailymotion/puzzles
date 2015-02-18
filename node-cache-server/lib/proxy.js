'use strict';

var request = require('request'),
	url = require('url'),
	cache = require('./cache');

exports.getJSON = function(clientReq, clientRes){
	var reqURL = __proxy;
	reqURL.pathname = '/api/' + clientReq.params.route;
	reqURL.query = clientReq.query;
	reqURL = url.format(reqURL);

	if (__cache.requests) {
		cache.exists(reqURL, function(key){
			if (key){
				getCachedRequest(reqURL, function(data){
					clientRes.json(JSON.parse(data));
				});
			} else {
				makeRequest(reqURL, function(data){
					clientRes.json(data);
				});
			}
		});
	} else {
		makeRequest(reqURL, function(data){
			clientRes.json(data);
		});
	}
	
};

exports.flush = function(clientReq, clientRes){
	var reqURL = __proxy;
	reqURL.pathname = '/api/' + clientReq.params.route;
	reqURL.query = clientReq.query;
	reqURL = url.format(reqURL);

	flushCachedRequest(reqURL, function(){
		clientRes.json({
			status: 'ok'
		});
	});
};

function getCachedRequest(url, callback){
	cache.get(url, function(data){
		console.log('Request already cached, serving cached file: ' + url);
		callback(data);
	});
}

function makeRequest(url, callback){
	request({
		url: url,
		method: "GET",
		timeout: 10000,
		followRedirect: true,
		encoding: 'utf8',
		json: true
	},

	function(err, proxyRes, data){
		console.log(url + ' no cached yet, requesting data');
		if (err) {
			callback({ error: err.code });
		} else {
			if (proxyRes.statusCode === 200){
				cache.set(url, data, function(){
					console.log('Caching request in redis');
					callback(data);
				});
			} else {
				callback({ status: proxyRes.statusCode });
			}
		}
	});
}

function flushCachedRequest(url, callback){
	cache.delete(url, function(key){
		if (key) console.log('Request flushed: ' + key);
		else console.log('Key didn\'t exist in Redis, request not flushed');
		callback();
	});
}