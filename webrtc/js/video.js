var width = 320;
var height = 240;
var feed = document.querySelector('video');
var canvas  = document.querySelector('canvas');
var ready_to_screenshot = false;

// console.log(canvas);
var context = canvas.getContext('2d');

navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia || navigator.oGetUserMedia;

if (navigator.getUserMedia)
{
    navigator.getUserMedia({video: true}, function(stream)
    {
        feed.height = height;
        feed.width = width;
        feed.src = window.URL.createObjectURL(stream);

        ready_to_screenshot = true;
    },
    function()
    {
        console.warn('User didn\'t confirm');
    });
}
else
{
    console.warn('video tag isn\'t supported');
}


document.querySelector('button').addEventListener('click',function()
{
    if (feed !== null)
    {
        canvas.height = height;
        canvas.width  = width;
        context.drawImage(feed, 0, 0, width, height);
        canvas.src = canvas.toDataURL('image/png');
    }
});