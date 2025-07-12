let soup;
let response = soup ? "Yes we have soup."  : "Sorry we do not have soup today.";
console.log(response);

let chicken = "Broilers";
let buyerBanned = false;
let chickenAccess = buyerBanned ? "Sorry you are banned from the farm access."
  :chicken
  ? `Yes we have ${chicken} today for purchase.`
  :"Sorry, no chicken today";
console.log(chickenAccess);


let testScore = 100;
let myGrade = testScore > 89 ? "A"
: testScore > 79 ? "B"
:testScore > 69 ? "C"
:testScore > 59 ? "D"
:"F";
console.log(`My test grade is ${myGrade}.`);

let computer = "scissors";
let playerOne = "paper";
let winner = 
  playerOne === computer
  ? "Tie game!"
  :playerOne === "rock" && computer === "paper"
  ? "Computer wins!"
  :playerOne === "paper" && computer === "scissors"
  ? "Computer wins"
  :playerOne === "scissors" && computer === "rock"
  ? "Computer wins!"
  :"Player one wins!";

console.log(winner);




