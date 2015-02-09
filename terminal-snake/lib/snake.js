'use strict';

var ansi   = require('ansi')

var Snake = function() {
  this.interval = false
  this.speed    = 100

  this.stdin = process.stdin
  // prevent the script to exit itself
  this.stdin.resume()
  // don't output the input
  this.stdin.setRawMode(true)
  // because who wants binary
  this.stdin.setEncoding('utf8')

  // initialize the cursor
  this.cursor = ansi(process.stdout)

  this.block = '█'
}

Snake.prototype.start = function() {
  this.isPlaying = true
  this.points = 0
  this.direction = 'd'
  this.snake = this.getInitialPosition()
  this.food  = this.getFoodPosition()
  this.clearScreen()
  this.write('NEW GAME')
  this.cursor.hide()
  this.listenInput()

  var self = this

  setTimeout(function() {
    self.cycle.call(self)
  }, 2000)
}

Snake.prototype.end = function() {
  var self = this

  self.isPlaying = false
  clearTimeout(this.interval)
  self.clearScreen()
  self.write('GAME OVER', self.points.toString() + (self.points > 1 ? ' points' : ' point'))

  // don't forget the show the cursor and exit the process or you'll be stuck forever
  setTimeout(function() {
    self.cursor.show()
    self.clearScreen()
    process.exit()
  }, 2000)
}

/**
 * Listen for user input
 * Works for snake's directions and exit
 */
Snake.prototype.listenInput = function() {
  var self = this

  this.stdin.on('data', function(key) {
    // ctrl + c
    if (key === '\u0003') {
      self.end()
    }
    else {
      if (['w', 'a', 's', 'd'].indexOf(key) !== -1) {
        self.go.call(self, key)
      }
    }
  })
}

/**
 * Change the direction, but make sure we can't go back where we were
 */
Snake.prototype.go = function(direction) {
  // lol
  if (((this.direction === 'a' || this.direction === 'd') &&
    (direction === 'w' || direction === 's')) ||
    ((this.direction === 'w' || this.direction === 's') &&
    (direction === 'a' || direction == 'd'))) {
    this.direction = direction
  }
}

/**
 * Main method
 * Displays the game
 */
Snake.prototype.cycle = function() {
  var self = this

  self.clearScreen()
  var isEating = self.isSnakeEating()
  self.getSnakeCoordinates(isEating)
  self.isSnakeEatingItself()
  self.displaySnake()
  if (isEating) {
    self.food = self.getFoodPosition()
  }
  self.displayFood()

  // call this method again
  self.interval = setTimeout(function() {
    self.isPlaying && self.cycle.call(self)
  }, self.speed)
}

/**
 * Return the initial snake's position
 * The position is an array of coordinates
 */
Snake.prototype.getInitialPosition = function() {
  var y = ~~(process.stdout.rows / 2)
    , x = ~~(process.stdout.columns / 2 - 2)

  return [
    [x - 3, y],
    [x - 2, y],
    [x - 1, y],
    [x, y],
    [x + 1, y]
  ]
}

/**
 * Get the next snake's position
 * One again, the position is an array which means we remove the first element
 * and add one in the current direction
 */
Snake.prototype.getSnakeCoordinates = function(isEating) {
  // remove the tail of the snake
  isEating || this.snake.shift()

  // take the head of the snake
  var head = this.snake[this.snake.length - 1]
    , newPosition = [head[0], head[1]]
  // increment/decrement x or y depending on the direction
  switch (this.direction) {
    case 'w':
      newPosition[1] = newPosition[1] - 1
      break
    case 's':
      newPosition[1] = newPosition[1] + 1
      break
    case 'a':
      newPosition[0] = newPosition[0] - 1
      break
    case 'd':
      newPosition[0] = newPosition[0] + 1
      break
  }

  // game over when the snake gets an edge of the screen
  if (newPosition[0] === 1 || newPosition[0] === process.stdout.columns ||
    newPosition[1] === 1 || newPosition[1] === process.stdout.rows) {
    this.end()
  }

  this.snake.push(newPosition)
}

Snake.prototype.displaySnake = function() {
  var self = this
  self.cursor.hex('#6FAADE')

  this.snake.forEach(function(chunk) {
    self.cursor.goto(chunk[0], chunk[1]).write(self.block)
  })
  self.cursor.reset()
}

/**
 * Get a random position for the food
 * Don't check if the snake is already on it, yolo.
 * Add a margin of 6 from the edges because it's kinda hard to be precise
 */
Snake.prototype.getFoodPosition = function() {
  var x = ~~((Math.random() * process.stdout.columns - 5) + 5)
    , y = ~~((Math.random() * process.stdout.rows - 5) + 5)

  return [x, y]
}

Snake.prototype.displayFood = function() {
  this.cursor.hex('#F54778').goto(this.food[0], this.food[1]).write(this.block).reset()
}

/**
 * Check if the head of the snake is on the food
 */
Snake.prototype.isSnakeEating = function() {
  var head = this.snake[this.snake.length - 1]
  if (head[0] == this.food[0] && head[1] == this.food[1]) {
    this.points++
    if (this.points % 5 === 0) {
      this.speed = this.speed <= 30 ? this.speed : this.speed - 10
    }
    return true
  }
}

/**
 * Check if the snake is eating itself
 */
Snake.prototype.isSnakeEatingItself = function() {
  var self = this
    , head = this.snake[this.snake.length - 1]
    , body = this.snake.slice(0)

  body.pop()

  body.forEach(function(chunk) {
    if (chunk[0] === head[0] && chunk[1] === head[1]) {
      self.end()
    }
  })
}

Snake.prototype.write = function(title, message) {
  var x = (process.stdout.columns - title.length) / 2
    , y = process.stdout.rows / 2

  this.cursor.bold().goto(x, y).write(title).reset()

  if (message) {
    this.cursor.goto(x, y + 2).write(message)
  }
}

Snake.prototype.clearScreen = function() {
  this.cursor.write('\u001B[2J\u001B[')
}

module.exports = Snake
