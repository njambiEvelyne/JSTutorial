let calculate = confirm("Do you want to to do the calculations.")
if (calculate) {
  let num1 = Number(prompt("Enter the first number."));
  
  let num2 = Number(prompt("Enter the second number."));

  if (num1 && num2){
    let choice = prompt("Is it +, - , *,  or /");
    // if (choice === "+"){
    //   let result = num1 + num2;
    //   alert(`The sum is ${result}`);
    // }
    switch (choice){
      case "+":
        let result = num1 + num2;
        alert(`The sum is ${result}`);
        break;
      
      case "-":
        let diff  = num1 - num2;
        alert(`The difference is ${diff}`);
        break;

      case "*":
        let res  = num1 - num2;
        alert(`The multiplication result  is ${diff}`);
        break;
      case "/":
        if (num2 === 0){
          alert("Sorry you cannot divide by zero!");
        }else{
          let div = num1 / num2;
          alert(`The division result is ${div}`);
        }
        break;
      default:
        alert("Sorry, that is not an arithmetic operator.");
      
    }
  alert("Thank you for making me useful");

  }else{
    alert('You did not enter all the numbers.');
  }
}else {
  alert("Okay, maybe next time.");
}
