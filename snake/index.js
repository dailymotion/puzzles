var ansi = require('ansi')
    , stdin = process.stdin
    , cursor = ansi(process.stdout)
    , snakeBaseLength = 10
    , dirs = {
        right: [1, 0],
        left: [-1, 0],
        top: [0, -1],
        bottom: [0, 1],
    }
    , dir = dirs.right
    , playgroundWidth = process.stdout.columns
    , playgroundHeight = process.stdout.rows
    , fruit = getRandomFruitPosition()

stdin.setRawMode(true);
stdin.resume();
stdin.on('data', function(key)
{
    // CTRL+C
    if (key == '\u0003')
    {
        exit();
    }

    var newDir;

    switch (key.toString())
    {
        case '\u001b[A':
            newDir = dirs.top
        break;
        case '\u001b[B':
            newDir = dirs.bottom
        break;
        case '\u001b[C':
            newDir = dirs.right
        break;
        case '\u001b[D':
            newDir = dirs.left
        break;
        default:
            setTimeout(updateGame, dir[0] != 0 ? 70 : 100);
        break;
    }

    if (newDir && newDir.join('') != dir.map(function(v){return -v}).join(''))
    {
        dir = newDir;
    }
});

var snake = [];
for (var i = 0; i < snakeBaseLength ; i++)
{
    snake.push([
        Math.floor(playgroundWidth/2) - Math.floor(snakeBaseLength/2) + i,
        Math.floor(process.stdout.rows/2)
    ]);
}

cursor.hide();

writeCenteredText('NEW GAME - Hit "ENTER" to start', true);

function exit()
{
    cursor
        .reset() // set back default fg and bg color
        .goto(0, 0) // clear screen
        .eraseData()
        .show();

    process.exit();
}

function getRandomFruitPosition()
{
    return [
        Math.floor(Math.random() * playgroundWidth),
        Math.floor(Math.random() * playgroundHeight)
    ]
}

function writeCenteredText(message, clearScreen)
{
    if (clearScreen)
    {
        cursor
            .goto(0, 0)
            .eraseData();
    }

    cursor
        .reset()
        .goto(Math.floor(playgroundWidth/2) - Math.floor(message.length/2), Math.floor(playgroundHeight/2)) // clear screen
        .write(message);
}

function updateGame()
{
    var head = snake[snake.length - 1];

    if (!head[0] || !head[1] || head[0] == playgroundWidth || head[1] == playgroundHeight)
    {
        return writeCenteredText("GAME OVER - " + (snake.length - snakeBaseLength) + ' points')
    }

    cursor
        .reset()
        .goto(0, 0)
        .eraseData()
        .bg.red()
        .goto(fruit[0], fruit[1])
        .write(' ')
        .bg.grey()

    snake.forEach(function(c)
    {
        cursor
            .goto(c[0], c[1])
            .write(' ')
    })

    var eaten;

    if (head.join() == fruit.join())
    {
        fruit = getRandomFruitPosition();
        eaten = true;
    }

    var newHead = [head[0] + dir[0], head[1] + dir[1]];

    if (snake.join('.').match(newHead.join()))
    {
        return writeCenteredText("GAME OVER - " + (snake.length - snakeBaseLength) + ' points')
    }

    if (!eaten) snake.splice(0,1);
    snake.push(newHead);
    setTimeout(updateGame, dir[0] != 0 ? 70 : 100); // to compensate move speed vertically
}