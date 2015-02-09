#! /usr/bin/env node

function add()
{
    if (!arguments.length)
    {
        console.log(add.lastResult);
    }
    else
    {
        add.lastResult = (add.lastResult || 0) + Array.prototype.slice.call(arguments).reduce(function(v1,v2)
        {
            return v1 + v2;
        });
    }

    return add;
}

add.toString = function()
{
    console.log(add.lastResult);
};

add.reset = function()
{
    add.lastResult = 0;

    return add;
};

add(1,2,5);
add.toString();

add.reset();
add.toString(); // 0

add(4,7)(); // 11

add(1)(2)(3)(); // 17

add.reset()(2)(); // 2

add.reset()(1)(2)(3)()(2,4,5)(2)(); // 19