!function() {

  'use strict';

  var video  = document.querySelector('video')
    , button = document.querySelector('button')
    , canvas = document.querySelector('canvas')
    , pics   = document.querySelector('#pics')
    , ctx    = canvas.getContext('2d')

  navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia ||
                           navigator.mozGetUserMedia || navigator.msGetUserMedia

  var stream = function stream(data) {
    video.src = window.URL.createObjectURL(data)
  }

  var error = function error(err) {
    console.error(err)
  }

  var takeScreenshot = function takeScreenshot() {
    canvas.width = 320
    canvas.height = 240
    ctx.drawImage(video, 0, 0, 320, 240)
    var img = new Image
    img.src = canvas.toDataURL()
    pics.appendChild(img)
  }

  if (navigator.getUserMedia) {
    navigator.getUserMedia({video: true, audio: false}, stream, error)
  }
  else {
    alert('lol nope')
  }

  button.addEventListener('click', takeScreenshot)

}();
