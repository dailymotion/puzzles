// Variables 
var height  = 240,
    width   = 320,
    canvas  = document.querySelector('canvas'),
    context = canvas.getContext('2d'),
    video   = document.querySelector('video');
navigator.getUserMedia = ( navigator.getUserMedia ||
                       navigator.webkitGetUserMedia ||
                       navigator.mozGetUserMedia ||
                       navigator.msGetUserMedia);

// fetch the webcam stream
if (navigator.getUserMedia)
{
    navigator.getUserMedia(

        {
            video: true,
            audio: true
        },

        function(localMediaStream)
        {
            video.setAttribute('width', width);
            video.setAttribute('height', height);
            video.src = window.URL.createObjectURL(localMediaStream);
            video.play();
        },

        function(error)
        {
            console.error('Error when fetching the localMediaStream');
			console.log(error);
        }
   );
}
else
{
    console.log('navigator.getUserMedia is not supported by your browser');
}

// take screenshot
function takeScreenshot()
{
    canvas.height = height;
    canvas.width  = width;
    context.drawImage(video, 0, 0, width, height);
}

document.querySelector('button').addEventListener('click', takeScreenshot, false);