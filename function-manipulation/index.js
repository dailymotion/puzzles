var add = function(){
	add.count = add.count || 0;
	add.toString = function(){
		console.log(add.count);
	};
	add.reset = function(){
		add.count = 0;
		return add;
	};
	var x = arguments.length;
	if (x > 0) {
		for (var i=0; i<x; i++){
			add.count += arguments[i];
		}
	} else {
		console.log(add.count);
	}
	return add;
};

add(4);
add.toString(); // 4
add.reset();
add.toString(); // 0
add(4,7)(); // 11
add(1)(2)(3)(); // 17
add.reset()(2)(); // 2
add.reset()(1)(2)(3)()(2,4,5)(2)(); // 19