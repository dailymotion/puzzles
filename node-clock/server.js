var figlet = require('figlet');

updateClock();

// https://www.npmjs.com/package/ansi
var rows = process.stdout.rows;
var columns = process.stdout.columns;

function updateClock()
{
    var now = new Date(), // current date
        time = now.getHours() + ' : ' + now.getMinutes() + ' : ' + now.getSeconds();

    figlet(time, function(err, data)
    {
        if(err)
        {
            console.warn('Error');
            return false;
        }

        data = data.split('\n');
        var test = (rows - data[0].length)/2;
        var spaces = new Array(parseInt(20,10)).join(' ');

        data = data.map(function(line)
        {
            return spaces + line
        }).join('\n');

        console.warn(data);
    });

    setTimeout(updateClock, 1000);
}