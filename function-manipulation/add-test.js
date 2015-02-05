[
    ['add(4).sum',           4        ],
    ['add.toString()',       undefined],
    ['add.reset().sum',      undefined],
    ['add.toString()',       undefined],
    ['add(4,7)().sum',       11       ],
    ['add(1)(2)(3)().sum',   17       ],
    ['add.reset()(2)().sum', 2        ],
    ['add.reset()(1)(2)(3)()(2,4,5)(2)().sum', 19],
].forEach(function (test)
{
    console.info(test[0]);
    var result = eval(test[0]);
    console.log('-> %s', result);
    console.assert(result === test[1], 'expected -> ' + test[1]);
})
