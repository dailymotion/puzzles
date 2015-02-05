add(4);
add.toString(); // 4
console.log('It should return 4');

add.reset();
add.toString(); // 0
console.log('It should return 0');

add(4,7)(); // 11
console.log('It should return 11');

add(1)(2)(3)(); // 17
console.log('It should return 17');

add.reset()(2)(); // 2
console.log('It should return 2');

add.reset()(1)(2)(3)()(2,4,5)(2)(); // 19
console.log('It should return 6 and then 19');
