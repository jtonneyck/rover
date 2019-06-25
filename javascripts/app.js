function Rover(grid, game, startingPosition) {
  game.gameObjects.push(this);

  if(!Array.isArray(grid) || grid.length != 2) throw new Error("Grid has to be an two dimensional array.")
  
  this.grid = grid
  this.position = startingPosition
  this.facing = "N"
  this.travelLog = []

  this.action = function(m) {
    switch(m.toUpperCase()) {
      case "N":
        this.facing = "N";
        break;
      case "E":
        this.facing = "E";
        break;
      case "S":
        this.facing = "S";
        break;
      case "W":
        this.facing = "W";
        break;
      case "F":
        this.moveForward(); 
        break;
      case "B":
        this.moveBackwards(); 
        break;
      default:
        console.log(m + " is an invalid command. Command ignored.")                      
    }
  }

  this.moveForward = function() {
    this.travelLog.push(this.position) //travel log
    switch(this.facing.toUpperCase()) {
      case "N":
        if((this.position[1] + 1) > grid[1] ) this.OutOfBounds()
        else this.position[1]++;
        break;
      case "E":
        if((this.position[0] + 1) > grid[0] ) this.OutOfBounds()
        else this.position[0]++;
        break;
      case "S":
        if((this.position[1] - 1) < 0 ) this.OutOfBounds()
        else this.position[1]--;
        break;
      case "W":
        if((this.position[0] -1) < 0 ) this.OutOfBounds()
        else this.position[0]--;
        break;
    }
    game.checkForCollision();
  }

  this.moveBackwards = function() {
    this.travelLog.push(this.position) //travel log
    switch(this.facing.toUpperCase()) {
      case "N":
        if(((this.position[1] - 1) < 0)) this.OutOfBounds()
        else this.position[1]--;
        break;
      case "E":
        if((this.position[0] - 1) < 0 ) this.OutOfBounds()
        else this.position[0]--;
        break;
      case "S":
        if((this.position[1] + 1) > grid[1] ) this.OutOfBounds()
        else this.position[1]++;
        break;
      case "W":
        if((this.position[0] + 1) > grid[0] ) this.OutOfBounds()
        else this.position[0]++;
        break;
    }
    game.checkForCollision();
  }

  this.OutOfBounds = function() {
    throw new Error("Out of bounds, invalid move!");
  }

  this.tellMeWhatToDo = function(stringOfCommands) {
    for(let i = 0; i < stringOfCommands.length; i++) {
      this.action(stringOfCommands[i])
    }
  }
}

function Game() {
  this.gameObjects = []
  this.checkForCollision = function() {
    let collided = []
    for(var i = 0; i < this.gameObjects.length; i++) {
      for(var j = 0; j < this.gameObjects.length; j++) {
        if(
          (this.gameObjects[i].position[0] === this.gameObjects[j].position[0]) && 
          (this.gameObjects[i].position[1] === this.gameObjects[j].position[1]) && 
          (i !== j) && 
          (collided.indexOf(j) == -1)
        ) {
          alert("BOEM!")
          collided.push(i)
        }
      }
    }
  }
}

function obstacle(position, game) {
  this.position = position
  game.gameObjects.push(this)
}

var theGame = new Game()
var aRover = new Rover([10,10], theGame, [5,5])
var anotherOver = new Rover([10, 10], theGame, [5,6])
var anObstacle = new obstacle([1,2], theGame)

aRover.tellMeWhatToDo("f")
//Boem!