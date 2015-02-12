---
layout: default
title: Terminal Snake
date: 2015/02/12
---
<h1>Snake in your termninal</h1>

<h2>Objective</h2>

<div>
    <p>Reproduce the classic Snake game in your terminal with NodeJs.</p>
    <p>Steps:</p>
    <ol>
        <li>Check out the <a href="https://github.com/TooTallNate/ansi.js">Ansi</a> module. It will allow you to output anything in your terminal.</li>
        <li>Play with <code>process.stdin</code> to find out how to get the user's input.</li>
        <li>Create a moving snake. There is a simple way to make the snake, once you get it, it's actually easy.</li>
        <li>Once this is done, draw blocks randomly, and make the snake grow and go faster when it touches them.</li>
        <li>The user looses when the snake eats itself, or touches the edges of the screen.</li>
    </ol>
</div>

<div class="row">
    <div class="col-lg-6 col-lg-offset-3">
        <img src="{{ site.baseurl }}/img/terminal-snake.gif" width="100%">
        <p><small>(Yes the vertical movement is kinda weird, it's because of the terminal line height)</small></p>
    </div>
</div>

<h3>How</h3>
<div>
    <ul>
        <li><a target="_blank" href="http://nodejs.org/api/process.html#process_process_stdin">NodeJS process.stdin docs</a></li>
        <li><a target="_blank" href="https://github.com/TooTallNate/ansi.js">Ansi module</a></li>
    </ul>
</div>

<h3>Prerequisites</h3>

<div>
    <ul>
        <li>A computer with NodeJs</li>
        <li>A brain</li>
        <li>Some memories of your <a href="http://www.appletouch.fr/wp-content/uploads/2012/07/Snake-2k.png" target="_blank">philosophy classes</a></li>
    </ul>
</div>

<h3>Expected time to resolution</h3>
<div>
    <p>Around 1h30</p>
</div>

<h3>Expected number of lines</h3>
<div>
    <p>Around 250</p>
</div>

<h3>Lost?</h3>
<div>
    <button class="show-tips" id="show-tips">Show Tips</button>
    <div id="tips">
        <ul>
            <li>
                <p><code>process.stdin</code> has everything you need to read the user's input, and prevent the script to exit immediately:</p>
                <pre>// prevent the script to exit itself
process.stdin.resume()
// don't write the input to the console
process.stdin.setRawMode(true)
// if you don't set the encoding, you'll get binary crap.
process.stdin.setEncoding('utf8')</pre>
            </li>
            <li>The snake is actually just a set of coordinates, which means: an array. When it moves, the last element (the tail) disappears and you add an element forward (the head). This way, you don't move anything. And you just have to calculate the position of <strong>one</strong> new element, which depends on the direction of the snake.</li>
            <li>The main workflow of the game is as follow:
                <ol>
                    <li>Check if the snake is eating a block</li>
                    <li>Get the new position of the snake. Don't forget to take into account the potential eating of a block</li>
                    <li>Check if the snake is eating itself. If it is, the game stops</li>
                    <li>Display the snake at its new position</li>
                    <li>If the snake has eaten the block, display a new block</li>
                </ol>
            </li>
            <li>If you need more tips, check out <a href="https://github.com/dailymotion/puzzles/blob/romain-berger/terminal-snake/lib/snake.js">my solution</a>. I tried to comment it clearly to describe what is happening.</li>
        </ul>
    </div>
</div>

<h3>Definitely lost?</h3>
<div>
    <p><a target="_blank" href="https://github.com/dailymotion/puzzles/blob/romain-berger/terminal-snake/lib/snake.js">Show solution</a></p>
</div>
</div>
