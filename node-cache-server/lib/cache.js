'use strict';

var sha1 = require('./sha1'),
	redis = require('redis').createClient();

exports.set = function(url, json, success){
	var key = sha1.encode(url);
	redis.set(key, JSON.stringify(json), function(err){
		if (err) throw err;
		redis.expire(key, __cache.expirationTime, function(err){
			success();
		});
	});
};

exports.get = function(url, success){
	redis.get(sha1.encode(url), function(err, data){
		if (err) throw err;
		success(data);
	});
};

exports.exists = function(url, callback){
	redis.exists(sha1.encode(url), function(err, exists){
		if (err) throw err;
		callback(exists ? sha1.encode(url) : undefined);
	});
};

exports.delete = function(url, callback){
	var key = sha1.encode(url);
	redis.exists(key, function(err, exists){
		if (err) throw err;
		if (exists) {
			redis.del(key, function(err, res){
				if (err) throw err;
				callback(key);
			});
		} else {
			callback(undefined);
		}
	});
};

redis.on("error", function (err) {
    throw err;
});