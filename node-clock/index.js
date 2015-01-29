var figlet   = require('figlet'),
    spawn    = require('child_process').spawn,
    termRows = process.stdout.rows,
    termCols = process.stdout.columns;

function clear(cb) {
    var out = spawn('clear', [], {stdio: 'inherit'});
    out.on('close', cb);
}

function pad(x, len, n) {
    n = n || '0';
    x = x + '';
    return x.length >= len ? x : new Array(len - x.length + 1).join(n) + x;
}
function getTime() {
    var now = new Date();
    return pad(now.getHours(), 2) + ':' + pad(now.getMinutes(), 2) + ':' + pad(now.getSeconds(), 2);
}

function centerLine(text) {
    var numberOfSpaces = Math.round((termCols - text.length) / 2);
    return new Array(numberOfSpaces).join(' ') + text;
}

function verticalCenter(contentLines) {
    var numberOfLines = Math.round((termRows - contentLines) / 2);
    return new Array(numberOfLines).join('\n');
}

function showTime() {
    figlet.text(
        getTime(),
        {},
        function(err, data)
        {
            if (err)
            {
                console.error('Error while using Figlet');
                console.log(err);
                return;
            }

            var clockTime = data.split('\n');

            console.log(verticalCenter(clockTime.length));
            clockTime.forEach(function(l){
                console.log(centerLine(l));
            });
        }
    );
}

setInterval(function(){ clear(showTime); }, 1000);
