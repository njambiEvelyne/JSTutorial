// //Graded calculator
// let marks = Number(prompt("Enter your marks"));

// function add(){
//   let num1 = Number(prompt("Enter the first number"));
//   let num2 = Number(prompt("Enter the second number"));
//   let sum = num1 +  num2;
//   console.log(`The sum is ${sum}`);
//   alert(`The sum is ${sum}`);
// }
// function multiplication(){
//   let num1 = Number(prompt("Enter the first number"));
//   let num2 = Number(prompt("Enter the second number"));
//   let sum = num1 *  num2;
//   console.log(`The product is ${multiplication}`);
//   alert(`The product is ${multiplication}`);
// }
// function subtraction(){
//   let num1 = Number(prompt("Enter the first number"));
//   let num2 = Number(prompt("Enter the second number"));
//   let sum = num1 -  num2;
//   console.log(`The difference is ${subtraction}`);
//   alert(`The difference is ${subtraction}`);
// }

// function division(){
//   let num1 = Number(prompt("Enter the first number"));
//   let num2 = Number(prompt("Enter the second number"));
//   if(num2 = 0){
//     alert("Sorry you cannot divide by zero");
//   }else{
//     let division = num1 / num2;
//     console.log(division);
//     alert(`The division is ${division}`);
//   }
// }

// let 

let marks = Number(prompt("Enter your marks"))
if (marks >=80){
  console.log("Your Grade is 'A'");
  alert("Your Grade is 'A'")
}else if (marks >=70){
  console.log("Your grade is 'B'");
  alert("Your grade is 'B'")
}else if (marks >=60){
  console.log("Your grade is 'C'");
  alert("Your grade is 'C'")
}else if (marks >=50){
  console.log("Your grade is 'D'");
  alert("Your grade is 'D'")
}else{
  console.log("Your grade is 'F'");
  alert("Your grade is 'F'")
}
