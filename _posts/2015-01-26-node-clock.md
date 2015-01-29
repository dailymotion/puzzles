---
layout: default
title: Terminal ASCII Clock
date: 2015/01/29
---
<h1>DM Puzzle - Terminal ASCII Clock</h1>

<h2>Objective</h2>

<div>
    <p>Build a clock in your terminal that will display the time in ASCII art.</p>
    <p>Steps:</p>
    <ol>
        <li>Make a script that write the time in your terminal that updates itself every seconds.</li>
        <li>Use a module from npm to display the time in some beautiful ASCII art.</li>
        <li>Bonus step: center the clock vertically and horizontally.</li>
        <li>Bonus Bonus step: do the same thing in ruby!</li>
    </ol>

    <p>It should look like this:</p>
    <p>
        <img src="{{ site.baseurl }}/img/node-clock.gif" width="100%">
    </p>
</div>

<h3>How</h3>
<div>
    <ul>
        <li><a target="_blank" href="http://nodejs.org/api/">NodeJS doc</a></li>
        <li><a target="_blank" href="https://www.npmjs.com/package/figlet">The figlet module for your ASCII needs</a></li>
    </ul>
    <p>These docs should be enough to resolve the puzzle. </p>
</div>

<h3>Prerequisites</h3>

<div>
    <ul>
        <li>A computer with NodeJS installed</li>
    </ul>
</div>

<h3>Instructions</h3>

<div>
    <ol>
        <li>Use <a href="https://www.npmjs.com/package/figlet">Figlet</a> for the ASCII art part.</li>
        <li>Do it <strong>quick</strong> and <strong>dirty</strong>. But still, if you can do things clean with a package.json it would be cool.</li>
    </ol>
</div>

<h3>Expected time to resolution</h3>
<div>
    <p>Less than 1 hour</p>
</div>

<h3>Expected number of lines</h3>
<div>
    <p>Around 50</p>
</div>

<h3>Lost?</h3>
<div>
    <button class="show-tips" id="show-tips">Show Tips</button>
    <div id="tips">
        <ul>
            <li>
                <p>To clear your terminal, you can execute shell commands with the native <code>child_process</code>` module. There is a catch to be sure the command has been executed:</p>
                <pre>var spawn = require('child_process').spawn

var clear = function clear(cb) {
  var out = spawn('clear', [], {stdio: 'inherit'})
  out.on('close', cb)
}</pre>
            </li>
            <li>
                <p>To center the time in your terminal, you will need several things: the size of your terminal and the size of the text you display.</p>
                <ul>
                    <li>You can get the size of your terminal from the <code>process.stdout</code> object. Run <code>node -p 'process.stdout'</code> and see what you can use.</li>
                    <li>To get the size of the text, you'll need to split the output of figlet. The module returns a multiline string, which means every lines are separated with <code>\n</code>. If you split the string into an array, you'll get the number of lines and the number of characters per line. Math will be your friend from here.</li>
                </ul>
            </li>
        </ul>
    </div>
</div>

<h3>Definitely lost?</h3>
<div>
    <p><a target="_blank" href="https://github.com/dailymotion/puzzles/blob/romain-berger/node-clock/index.js">Show solution in NodeJS</a></p>
    <p><a href="_blank" href="https://github.com/dailymotion/puzzles/blob/romain-berger/node-clock-rb/clock.rb">Show solution in ruby</a></p>
</div>
</div>
