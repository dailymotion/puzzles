---
layout: default
title: Capture your webcam stream with WebRTC and html5
---
<h1>DM Puzzle - Capture your webcam stream with WebRTC and html5</h1>

<h2>Objective</h2>

<div>
    <p>We will learn how to capture a webcam stream in a <code>&lt;video&gt;</code> tag with WebRTC and, if you are still there, draw images from this stream with the <code>&lt;canvas&gt;</code> tag.</p>

    <p>Catpure the webcam stream:</p>
    <ol>
        <li>create an html page that includes a js file and a <code>&lt;video&gt;</code> tag.</li>
        <li>set the <code>&lt;video&gt;</code> tag in autoplay.</li>
        <li>in the js file:
            <ul>
                <li>ask the user permission to access his/her webcam and if the user accepts, fill the <code>&lt;video&gt;</code> tag with the captured webcam stream.</li>
                <li>set the <code>&lt;video&gt;</code> tag width and height to 320x240.</li>
            </ul>
        </li>
    </ol>

    <p>[OPTIONAL] Take screenshots from your webcam stream:</p>
    <ol>
        <li>add a button, a canvas element in your html file.</li>
        <li>set a listener on the <code>&lt;button&gt;</code>. When a user clicks on it, it should take a screenshot of the webcam stream:
            <ul>
                <li>add the listener</li>
                <li>create the callback: use the <code>&lt;canvas&gt;</code> context to draw an image from the <code>&lt;video&gt;</code>.</li>
                <li>Use the <cite>filter</cite> css property to add an effect on your video and canvas picture</li>
            </ul>
        </li>
    </ol>

    <h5>Example:</h5>

    <div>
        On your html page:
        <ul>
            <li>a notice should prompt to ask you if you allow the webcam access</li>
            <li>If you accept, the webcam should stream in the page</li>
            <li>When you click on the 'take screenshot' button, you should have a screenshot nearby the video stream</li>
        </ul>
        A live example is accessible here: <a target="_blank" href="http://ynote.hk/experiments-webrtc/">http://ynote.hk/experiments-webrtc/</a><br />
        login: dmuser<br />
        pwd: 3xperim3nts
    </div>
</div>

<h3>Prerequisites</h3>

<div>
    <ul>
        <li>A computer with a webcam</li>
        <li>A browser that supports <code>Navigator.getUserMedia()</code> API (since Chrome 21, Opera 18, and Firefox 17)</li>
    </ul>
</div>

<h3>Instructions</h3>

<div>
    <ol>
        <li>Keep it <strong>fun</strong> and <strong>simple</strong>!</li>
        <li>Do it <strong>quick</strong> and <strong>dirty</strong>! Do not reach for perfection (you know what I mean)!</li>
        <li>Do not spend more than the expected time. If you're having a hard time ask for help or have a look at the solution.</li>
        <li>
            Have fun and if you want to, read more about the puzzle subject once you're done.<br>
            <strong>Curiosity is the path to knowledge.</strong>
        </li>
    </ol>
</div>

<h3>To be resolved before</h3>
<div class="left-padding">
    17, December 2014
</div>

<h3>Expected time to resolution</h3>
<div>
    <p>Less than 2 hour</p>
</div>

<h3>Expected number of lines</h3>
<div>
    <p>Less than 100</p>
</div>

<h3>How</h3>
<div>
    <!-- Links to relevant documentation here -->
    <ul>
		<li><a target="_blank" href="http://www.w3.org/TR/mediacapture-streams/#local-content">http://www.w3.org/TR/mediacapture-streams/#local-content</a></li>
        <li><a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D.drawImage">https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D.drawImage</a></li>
        <li><a target="_blank" href="https://developer.mozilla.org/fr/docs/Web/CSS/filter">https://developer.mozilla.org/fr/docs/Web/CSS/filter</a></li>
    </ul>
</div>

<h3>Lost?</h3>
<div>
    <button id="show-tips">Show Tips</button>
    <div id="tips">
        <ul>
            <li>
                <p>In the documentation, look for:</p>
                <ul>
                    <li>[webrtc] check the <a target="_blank" href="http://www.w3.org/TR/mediacapture-streams/#examples">example</a> to know how to recover a local video stream</li>
                    <li>[canvas]The image parameter value for the method drawImage() can be an HTMLVideoElement</li>
                </ul>
            </li>
			<li>You can also check <a target="_blank" href="https://developer.mozilla.org/fr/docs/NavigatorUserMedia.getUserMedia">this example</a></li>
        </ul>
    </div>
</div>

<h3>Definitely lost?</h3>
<div>
    <p><a target="_blank" href="https://github.com/dailymotion/puzzles/tree/fanny-cheung/webcam-stream-webrtc">Show solution</a></p>
</div>
</div>

