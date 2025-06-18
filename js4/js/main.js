//Switch cases
switch ("2"){
  case 1:
    console.log("No match");
    break;

  case 2:
    console.log("No match");
    break;

  case 3:
    console.log("No match");
    break;
  
    default:
      console.log("No match")
    
}

//rock paper game
let playerOne = "scissors";
let computer = "scissors";

switch (playerOne){
  case computer:
    console.log("Tie game!");
    break;
  
  case "rock":
    if (computer === "paper"){
      console.log("Computer wins!");
    }else{
      console.log("Player one wins!");
    }
    break;

  case "paper":
    if (computer === "scissors"){
      console.log("computer wins!");
    }else{
      console.log("Player one wins!");
    }
    break;

  default:
    if (computer === "rock"){
      console.log("Computer wins!")
    }else{
      console.log("Player one wins!");
    }
}