var add = function() {
    add.toString = function() {
        console.log(add.total);
    };

    add.reset = function() {
        add.total = 0;
        return add;
    };

    if (!arguments.length) return (add.toString(), add);

    add.total = (add.total || 0) + Array.prototype.slice.call(arguments).reduce(function(p, c) { return p + c; });
    return add;
};
