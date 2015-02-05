'use strict';

var add = require('./add')

add(4)
add.toString()
console.log('-> 4')

add.reset()
add.toString()
console.log('-> 0')

add(4,7)()
console.log('-> 11')

add(1)(2)(3)()
console.log('-> 17')

add.reset()(2)()
console.log('-> 2')

add.reset()(1)(2)(3)()(2,4,5)(2)()
console.log('-> 19')
