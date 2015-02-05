---
layout: default
title: Function manipulation
---
<h1>DM Puzzle - Function manipulation</h1>

<h2>Objective</h2>

<div>
    <p>Manipulate pure javascript function to handle arguments.</p>
    <p>I would like to get a function named "add" which is able to store and add its arguments (and obviously print it). Simple right ?</p>
    <p>Steps :</p>
    <ol>
        <li>Create your add function to print its arguments.</li>
        <li>I have a really short memory so I need to be able to log in the console the sum of all of the arguments.</li>
        <li>Although I take my pills everyday, I sometimes make some mistakes and I have to reset my counter.</li>
        <li>We would be happy if our great function could take some arguments like that : add(1,2,3)..</li>
        <li>But we'd be very happy if you also could take some arguments like that too : add(1)(2,4)(3)</li>
    </ol>



    <h5>Bonus:</h5>

    <ol>
        <li>Print the counter like that : add(4,7)(); // 11</li>
        <li>..And like that : add.reset()(1)(2)(3)()(2,4,5)(2)(); // 6 and 19</li>
        <li>Finally, create the entire logic without global functions/variables (all you need is add !)</li>
    </ol>

    <div>
        <p>Now you should be able to have these results : </p>
        <pre>
            add(4);
            add.toString(); // 4

            add.reset();
            add.toString(); // 0

            add(4,7)(); // 11

            add(1)(2)(3)(); // 17

            add.reset()(2)(); // 2

            add.reset()(1)(2)(3)()(2,4,5)(2)(); // 17
        </pre>
    </div>
</div>

<h3>Prerequisites</h3>

<div>
    <ul>
        <li>A computer</li>
        <li>A text editor</li>
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
<div>
    <p>12, Febuary 2015</p>
</div>

<h3>Expected time to resolution</h3>
<div>
    <p>Less than 30 minutes</p>
</div>

<h3>Expected number of lines</h3>
<div>
    <p>Less than 25</p>
</div>

<h3>Lost?</h3>
<div>
    <button class="show-tips" id="show-tips">Show Tips</button>
    <div id="tips">
        <ul>
            <li>You can use your function "add" as an object to attach someother functions like reset or toString.</li>
            <li>The recursive way is a good way :)</li>
        </ul>
    </div>
</div>

<h3>Definitely lost?</h3>
<div>
    <p><a target="_blank" href="https://github.com/dailymotion/puzzles/blob/loick-ledigabel/function-manipulation/index.html">Show solution</a></p>
</div>
</div>
