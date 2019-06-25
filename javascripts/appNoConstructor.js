var rover = {
    grid : [10,10],
    position : [5,5],
    facing : "N",
  
    action : function(m) {
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
        default:
          console.log(m + " is an invalid command. Command ignored.")                      
      }
    },
    moveForward : function() {
      switch(this.facing.toUpperCase()) {
        case "N":   
          if((this.position[1] + 1) > this.grid[1] ) this.OutOfBounds()
          else this.position[1]++;
          break;
        case "E":
          if((this.position[0] + 1) > this.grid[0] ) this.OutOfBounds()
          else this.position[0]++;
          break;
        case "S":
          if((this.position[1] - 1) < 0 ) this.OutOfBounds()
          else this.position[1]--;
          break;
        case "W":
          if((this.position[0] -1 ) < 0 ) this.OutOfBounds()
          else this.position[0]--;
          break;
      }
    },
    OutOfBounds : function() {
      throw new Error("Out of bounds, invalid move!");
    },
    tellMeWhatToDo : function(stringOfCommands) {
      for(let i = 0; i < stringOfCommands.length; i++) {
        this.action(stringOfCommands[i])
      }
    }
  }


  
  