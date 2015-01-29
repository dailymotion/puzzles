var figlet = require('figlet'),
    zpad = require('zpad');

function getCurrentTime()
{
    var date = new Date();

    return [date.getHours(), date.getMinutes(), date.getSeconds()]
        .map(function(v){return zpad(v)})
        .join(':');
}

setInterval(function()
{
    figlet.text(
        getCurrentTime(),
        {
            font: 'Ghost',
            horizontalLayout: 'default',
            verticalLayout: 'default'
        },
        function(err, data)
        {
            if (err) return console.log('Something went wrong...', err);

            console.log(
                '\u001B[2J\u001B[' + (Math.floor(process.stdout.rows/2) - data.split("\n").length) + ';' +
                '0f' +
                data
                    .split("\n")
                    .join(
                        '\n\u001B[' +
                        (Math.floor(process.stdout.columns/2 - data.split("\n")[2].length/2)) +
                        'C'
                    )
            );
        }
    );
}, 1000);