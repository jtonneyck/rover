// Rover Object Goes Here
// ======================



// ======================
function turnLeft(rover){
  console.log("turnLeft was called!");
}

function turnRight(rover){
  console.log("turnRight was called!");
}

function moveForward(rover){
  console.log("moveForward was called")
}


function Rover(grid) {

  if(!Array.isArray(grid) || grid.length != 2) throw new Error("Grid has to be an two dimensional array.")
  this.grid = grid;
  this.position = [Math.floor(grid[0] / 2), Math.floor(grid[1]/ 2)]
  this.facing = "N"

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
        this.moveBackwards;
        break;
      default:
        console.log(m + " is an invalid command. Command ignored.")                      
    }
  }

  this.moveForward = function() {
    switch(this.facing) {
      case "N":
        if(this.position[1]++ > grid[1] ) throw new Error("Out of bounds, invalid move!")
        else this.position[1]++;
        break;
      case "E":
        if(this.position[0]++ > grid[0] ) throw new Error("Out of bounds, invalid move!")
        else this.position[0]++;
        break;
      case "S":
        if(this.position[1]-- < 0 ) throw new Error("Out of bounds, invalid move!")
        else this.position[1]--;
        break;
      case "W":
        console.log("reached")
        if(this.position[0]-- < 0 ) throw new Error("Out of bounds, invalid move!")
        else this.position[0]--;
        break;
    }
  }

  this.tellMeWhatToDo = function(stringOfCommands) {
    for(let i = 0 ; i < stringOfCommands.length; i++) {
      this.action(stringOfCommands[i])
    }
  }
}

var aRover = new Rover([10,10])

aRover.tellMeWhatToDo("SFFNFFFFSF")

console.log(aRover.position)
console.log(aRover.facing)