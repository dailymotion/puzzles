'use strict';

var figlet = require('figlet')
  , spawn  = require('child_process').spawn
  , time

var clear = function clear(cb) {
  var out = spawn('clear', [], {stdio: 'inherit'})
  out.on('close', cb)
}

var displayTime = function displayTime() {
  clear(function() {
    time = new Date
    var minutes = time.getMinutes().toString().length === 2 ? time.getMinutes() : '0' + time.getMinutes().toString()
      , seconds = time.getSeconds().toString().length === 2 ? time.getSeconds() : '0' + time.getSeconds().toString()

    time = time.getHours() + ' : ' + minutes + ' : ' + seconds
    figlet(time, function(err, data) {
      if (err) {
        console.log(err)
        return
      }
      var data = data.split("\n")
        , marginH = (process.stdout.columns - data[0].length) / 2
        , marginV = (process.stdout.rows - data.length) / 2
        , whiteSpaceH = new Array(parseInt(marginH, 10)).join(' ')
        , whiteSpaceV = new Array(parseInt(marginV, 10))

      data = data.map(function(line) {
        return whiteSpaceH + line
      })

      var result = whiteSpaceV.join("\n") + data.join("\n")

      console.log(result)
      setTimeout(displayTime, 1000)
    })
  })
}

displayTime()
