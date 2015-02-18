'use strict';

var crypto = require('crypto');

exports.encode = function(string){
	var shasum = crypto.createHash('sha1');
	shasum.update(string);
	return shasum.digest('hex');
};