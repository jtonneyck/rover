var rover = {
    grid : [10,10],
    position : [5,5],
    facing : "N",
} 

function action(m) {
    switch(m.toUpperCase()) {
    case "N":
        rover.facing = "N";
        break;
    case "E":
        rover.facing = "E";
        break;
    case "S":
        rover.facing = "S";
        break;
    case "W":
        rover.facing = "W";
        break;
    case "F":
        moveForward(); 
        break;
    default:
        console.log(m + " is an invalid command. Command ignored.")                      
    }
}

function moveForward() {
      switch(rover.facing.toUpperCase()) {
        case "N":   
          if((rover.position[1] + 1) > rover.grid[1] ) rover.OutOfBounds()
          else rover.position[1]++;
          break;
        case "E":
          if((rover.position[0] + 1) > rover.grid[0] ) rover.OutOfBounds()
          else rover.position[0]++;
          break;
        case "S":
          if((rover.position[1] - 1) < 0 ) rover.OutOfBounds()
          else rover.position[1]--;
          break;
        case "W":
          if((rover.position[0] -1 ) < 0 ) rover.OutOfBounds()
          else rover.position[0]--;
          break;
      }
    }

function OutOfBounds() {
    throw new Error("Out of bounds, invalid move!");
}

function tellMeWhatTodo(stringOfCommands) {
    for(let i = 0; i < stringOfCommands.length; i++) {
        action(stringOfCommands[i])
    }
}