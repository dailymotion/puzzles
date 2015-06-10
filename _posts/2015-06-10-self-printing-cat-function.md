---
layout: default
title: Self printing cat function
---
<h1>A cat function printing itself</h1>

<h2>Objective</h2>

<div>
    <p>Complete the given function skeleton in order to make it print the ascii cat contained inside.</p>
    <p>Once executed in node of in a browser, the code must print the exactly what is given below. You cannot use node to read the file itself, or print a string.</p>

    <h5>Example:</h5>

    <div>
        <p>Execute your js file in node or in you browser, it must print this:</p>
        <img src="{{ site.baseurl }}/img/cat-dot-js.gif" width="100%" alt="ain't that cat cut as fuck">
    </div>
</div>

<h3>How</h3>
<div>
    <ul>
        <li>Mainly js magic</li>
        <li>You must find a way to print a stringified version of a function.</li>
        <li>Once this is done, simply remove all the code you've added to keep the cat and the wrapping function.</li>
    </ul>
</div>

<h3>Instructions</h3>

Start with this code snippet and add stuff to acheive your goal:

<pre>
function cat() {
     |\___/|
    =) ^Y^ (=
     \  ^  /
      )=*=(
     /     \
     |     |  _
     | | | | / )
     | | |_|/ /
     /_/_/____/
}
</pre>

<div>
    <ol>
        <li>The less code line the better</li>
    </ol>
</div>

<h3>Expected time to resolution</h3>
<div>
    <p>10 minutes</p>
</div>

<h3>Expected number of lines</h3>
<div>
    <p>You should need to add only one line.</p>
</div>

<h3>Lost?</h3>
<div>
    <button class="show-tips" id="show-tips">Show Tips</button>
    <div id="tips">
        <ul>
            <li>Logging a function directly won't give a stringified version of it. You will need to find a trick to do that. A trick that you probably know and use for other non-string stuffs...</li>
        </ul>
    </div>
</div>

<h3>Definitely lost?</h3>
<div>
    <p><a target="_blank" href="https://github.com/dailymotion/puzzles/blob/romain-berger/self-printing-cat/cat.js">Show solution</a></p>
</div>
</div>
