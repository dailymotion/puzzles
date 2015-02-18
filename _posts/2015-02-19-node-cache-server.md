---
layout: default
title: Node Cache Server
---
<h1>DM Puzzle - Use Node to proxify requests to an API and cache them in Redis</h1>

<h2>Objective</h2>

<div>
    <p>Have you ever wanted to convert your very slow and resistant to change website/blog with tons of content to something really cool using modern technos (like mobile app or API centric web app)? We'll try to do that. Let's build a cache server using NodeJS. The main idea is: when a request arrives, check if it is already cached, if yes, render it immediately, if not, proxify the request and store (cache) the content in your cache server, and then, render the result. Simple, isn't it? <a href="http://www.1001.io/improve-wordpress-with-nodejs/" target="_blank">Check this article</a> for more info about the idea.</p>
    <p><a href="http://imgur.com/3b0U478"><img src="http://i.imgur.com/3b0U478.png" title="source: imgur.com" /></a></p>
    <p><a href="http://imgur.com/w0GGNHB"><img src="http://i.imgur.com/w0GGNHB.png" title="source: imgur.com" /></a></p>
    <p>The steps:</p>
    <ol>
        <li>Create your Node server</li>
        <li>Build your routes using <a href="http://expressjs.com/4x/api.html" target="_blank">ExpressJS</a></li>
        <li>Create the caching logic:
            <ul>
                <li>Proxify your requests using <a href="https://github.com/request/request" target="_blank">RequestJS</a></li>
                <li>Store the result using <a href="http://redis.io/topics/quickstart" target="_blank">Redis</a> (and its <a href="https://github.com/mranney/node_redis" target="_blank">Node client</a>)</li>
            </ul>
        </li>
        <li>Create the rendering logic</li>
        <li>BONUS 1: Create a method to manually flush a specific cache key</li>
        <li>BONUS 2: Add an expiration time to your cache keys</li>
        <li>BONUS 3: Maybe global settings could be better for your cache and proxy</li>
    </ol>

    <h5>Example:</h5>

    <div>
        <p>You can use this simple API if you don't know which one to use:</p>
        <ul>
            <li><code>http://cultiz.com/api/get_posts/</code> : list of articles (can use "?count=" to limit the number of items)</li>
            <li><code>http://cultiz.com/api/get_post/?post_id=23668</code> : get 1 article (by ID or by slug: "?post_slug=")</li>
        </ul>
        <p>When I go to <code>http://localhost:1234/get_posts</code> I should get the JSON result I asked for, not cached the first (~4 s response time), cached then (~40 ms response time).</p>

    </div>
</div>

<h3>How</h3>
<div>
    <!-- Links to relevant documentation here -->
    <ul>
        <li><a href="http://expressjs.com/4x/api.html" target="_blank">http://expressjs.com/4x/api.html</a></li>
        <li><a href="https://github.com/request/request" target="_blank">https://github.com/request/request</a></li>
        <li><a href="https://github.com/mranney/node_redis" target="_blank">https://github.com/mranney/node_redis</a></li>
        <li><a href="http://redis.io/commands#generic" target="_blank">http://redis.io/commands#generic</a></li>
        <li><a href="http://nodejs.org/api/crypto.html" target="_blank">http://nodejs.org/api/crypto.html</a></li>
    </ul>
</div>

<h3>Prerequisites</h3>

<div>
    <ul>
        <li>An old website with an API or just an API :)</li>
        <li>A computer with NodeJS and Redis</li>
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
    <p>February 26 2015</p>
</div>

<h3>Expected time to resolution</h3>
<div>
    <p>Around 2 hours</p>
</div>

<h3>Expected number of lines</h3>
<div>
    <p>Less than 200</p>
</div>

<h3>Lost?</h3>
<div>
    <button class="show-tips" id="show-tips">Show Tips</button>
    <div id="tips">
        <ul>
            <li>
                <p>"get" and "delete" routes should be enough for this puzzle</p>
            </li>
            <li>
                <p>Redis need to be installed and the server should run ;) <code>$. redis-server</code>.</p>
                <p>You can also test what has been stored using the Redis client: <code>$. redis-cli</code> & <code>>. KEYS *</code>.</p>
            </li>
            <li>
                <p>In Redis, you can just use GET, SET, EXISTS and DEL commands like this <code>redisClient.set(key, value, function(error){ })</code>.</p>
            </li>
            <li>
                <p>If you have trouble setting a new key in Redis, you can use "crypto" to encode the requested URL into a unique string.</p>
            </li>
        </ul>
    </div>
</div>

<h3>Definitely lost?</h3>
<div>
    <p><a target="_blank" href="https://github.com/dailymotion/puzzles/tree/tristan-libersat/node-cache-server">Show solution</a></p>
</div>
</div>
