add = function () {
    add.sum = Array.prototype.reduce.call(arguments, function (a, b) {
        return a + b;
    }, add.sum || 0);
    arguments.length === 0 && add.toString();
    return add;
}

add.reset = function () {
    delete add.sum;
    return add;
}

add.toString = function () {
    console.log(add.sum);
}