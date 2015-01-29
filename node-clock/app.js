var figlet = require('figlet');

setInterval(function(){
	figlet(new Date().getHours() + ':' + new Date().getMinutes() + ':' + new Date().getSeconds(),
		function(err, data) {
		    if (err) {
		        console.log('Something went wrong...');
		        console.dir(err);
		        return;
		    }
		    console.log('\033[2J');
		    var line = data.split('\n'),
		    	cols = (process.stdout.columns - line[0].length)/2,
				rows = (process.stdout.rows - line.length)/2,
				whiteCols = new Array(parseInt(cols, 10)).join(' '),
		        whiteRows = new Array(parseInt(rows, 10)).join('\n');

		    line = line.map(function(line) {
		      return whiteCols + line;
		    })

	    	console.log(whiteRows + line.join("\n") + whiteRows);
		}
	);
}, 1000);