---
layout: default
title: Build a dumb NodeJS server
---
<h1>DM Experiment - Build a dumb NodeJS server</h1>

<h2>Objective</h2>

<div>
    <p>Create a NodeJS HTTP server that:</p>

    <ol>
        <li>runs on your local machine on port 1234</li>
        <li>print to console "Server is listening." when server is ready to receive request</li>
        <li>
            returns this dynamic text as response:
            <pre>Request &lt;request_method&gt; &lt;request_uri&gt; received at &lt;date&gt;</pre>
        </li>
    </ol>

    <h5>Example:</h5>

    <div>
        When accessed at <a href="http://127.0.0.1:1234/toto">http://127.0.0.1:1234/toto</a>, your server should reply:
        <br>
        <br>
        <pre>Request GET /toto received at Tue Nov 18 2014 18:42:11 GMT+0100 (CET)</pre>
    </div>
</div>

<h3>Prerequisites</h3>

<div>
    A recent / working NodeJS installation (ex: NodeJS v0.10.*).
</div>

<h3>Instructions</h3>

<div>
    <ol>
        <li>Keep it <strong>fun</strong> and <bstrong>simple</strong>!</li>
        <li>Do it <strong>quick</strong> and <strong>dirty</strong>! Do not reach for perfection (you know what I mean)!</li>
        <li>Do not spend for than the expected time. If you're having a hard time ask for help or have a look at the solution.</li>
        <li>
            Have fun and if you want to, read more about the experiment subject once you're done.<br>
            <strong>Curiosity is the path to knowledge.</strong>
        </li>
    </ol>
</div>

<h3>To be resolved before</h3>
<div>
    22, January 2015
</div>

<h3>Expected time to resolution</h3>
<div>
    Less than 1 hour
</div>

<h3>Expected number of lines</h3>
<div>
    Less than 20
</div>

<h3>How</h3>
<div>
    <a target="_blank" href="http://nodejs.org/api/http.html">http://nodejs.org/api/http.html</a>
</div>

<h3>Lost?</h3>
<div>
    <button onclick="(function(){event.target.style.display='none'; document.querySelector('#tips').style.display = 'block';})()">Show Tips</button>
    <div id="tips" style="display:none;">
        In the documenation, look for:
            <ul>
                <li>http.createServer</li>
                <li>http.Server.listen</li>
            </ul>
    </div>
</div>

<h3>Definitely lost?</h3>
<div>
    <a target="_blank" href="https://github.com/dailymotion/puzzles/blob/francois/node-server/server.js">Show solution</a>
</div>
