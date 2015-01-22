var video = document.querySelector('video'),
    button = document.querySelector('button'),
    canvas = document.querySelector('canvas');

navigator.getUserMedia = (
    navigator.getUserMedia ||
    navigator.webkitGetUserMedia ||
    navigator.mozGetUserMedia ||
    navigator.msGetUserMedia
);

if (navigator.getUserMedia)
{
    navigator.getUserMedia
    (
        // constraints
        {
            video: true,
            audio: false
        },

        // successCallback
        function(localMediaStream)
        {
            var webcamStreamURL = window.URL.createObjectURL(localMediaStream);
            video.src = webcamStreamURL;
            // console.log(localMediaStream, webcamStreamURL);
        },

        // errorCallback
        function(err)
        {
            console.log("The following error occured: " + err);
        }
    );
}
else
{
    console.log("getUserMedia not supported");
}

function takepicture()
{
    canvas.width = video.width;
    canvas.height = video.height;
    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
}

button.addEventListener('click', function(ev)
{
    takepicture();
    ev.preventDefault();
}, false);
