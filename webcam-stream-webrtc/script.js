(function(){
	navigator.getUserMedia = ( 	navigator.getUserMedia ||
                       			navigator.webkitGetUserMedia ||
                       			navigator.mozGetUserMedia ||
                       			navigator.msGetUserMedia);
	console.log(navigator.getUserMedia);

	if (navigator.getUserMedia) {
	   	navigator.getUserMedia({ video: true, audio: true}, 
	   		function(stream){
	   			var video = document.getElementById("videoCam"),
	   				button = document.getElementById("takePhoto"),
	   				canvas = document.getElementById("photoCanvas");

				video.src = window.URL.createObjectURL(stream);
				button.addEventListener('click', 
					function(){
				    	canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
				    	canvas.setAttribute('src', canvas.toDataURL('image/png'));
					}
				);
			}, 
			function(error){
				alert("You should accept the camera access permission");
			}
		);
	} else {
	   console.warn("getUserMedia not supported");
	}
})();