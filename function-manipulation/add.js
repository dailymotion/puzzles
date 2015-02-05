var add = function() {
  'use strict';

  add.reset = function() {
    add.value = 0
    return add
  }

  add.toString = function() {
    console.log(add.value)
  }

  if (arguments.length === 0) {
    add.toString()
    return add
  }

  add.value = add.value || 0
  Array.prototype.slice.call(arguments).forEach(function(x) {
    add.value += x
  })

  return add
}

if (typeof module !== 'undefined') {
  module.exports = add
}
