// let name = prompt("Please enter your name ");
// console.log(typeof name);
// if (name.length){
//   console.log(name ?? "You didn't enter your name.");
// }else{
//   console.log("You did not enter your name.");
// }
// welcome = alert("Wecome to the website.");
// i = confirm("Ok === TRUE\n CANCLE ==== FALSE");
// console.log(i);
// let name = prompt("Enter your name.");
// if (name){
//    //
//     console.log(name.length());
//  // console.log(trim(name.length()));
//   console.log(name.trim());
// }else{
//   console.log("You didn't enter your name.");
// }

let playGame = confirm("Shall we play rock, paper, or scissors?");
if (playGame) {
  //play
  let playerChoice = prompt("Please enter rock, paper, or scissors.");
  if (playerChoice){
    let playerOne = playerChoice.trim().toLowerCase();
    if (playerOne === "rock" || playerOne === "paper" || playerOne === "scissors"){
     let computerChoice = Math.floor(Math.random() * 3 + 1) ;
     let computer = computerChoice === 1 ? "rock"
     :computerChoice === 2? "paper"
     :"scissors";
     let winner = 
     playerOne === computer
      ? "Tie game!"
      :playerOne === "rock" && computer === "paper"
      ? `PlayerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
      :playerOne === "paper" && computer === "scissors"
      ? `PlayerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
      :playerOne === "scissors" && computer === "rock"
      ? `PlayerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
      :`playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`;
     alert(winner);
     let playAgain = confirm("Play Again?") ;
     playAgain ?location.reload() : alert("Okay, thanks for playing")

    }else{
      alert("You did not enter paper, rock or scissors ")
    }

  }else{
    alert("I guess you changed your mind. Maybe next time.");
  }
}else{
  alert("Okay, maybe next time.");
}