name = prompt("Enter your name");
if (name){
  console.log(`Hello ${this.name}. Welcome to the calulator program!`);
  choice = prompt("Choose the activity to run: '+', '-', '*', '/'");
  function calculator(){
    switch (choice){
      case "+":
        num1 = Number(prompt("Enter the first number"));
        num2 = Number(prompt("Enter the second number"));
        sum = num1 + num2;
        alert(`The sum is ${sum}`);
        break;

      case "-":
        num1 = Number(prompt("Enter the first number"));
        num2 = Number(prompt("Enter the second number"));
        difference = num1 - num2;
        alert(`The differnce is ${difference}`);
        break;
      
      case "*":
        num1 = Number(prompt("Enter the first number"));
        num2 = Number(prompt("Enter the second number"));
        product = num1 * num2;
        alert(`The differnce is ${product}`);
        break;

      case "/":
        num1 = Number(prompt("Enter the first number"));
        num2 = Number(prompt("Enter the second number"));
        if (num2 = 0){
          alert("Zero Division Error!");
        }
        else{
          division = num1 / num2;
          alert (`The division answer is ${division}`);
        }
        break;
        
      default:
        console.log("No operation to be executed")
        break;      
      }
  }
  repeat = confirm("Do you wish to continue with the operations?");
  if (repeat){
    calculator();
  }
  else{
    console.log("Okay. Maybe next time.")
  }

  console.log("Thank you for using the calculator!");
}

else{
  alert("Sorry you did not enter your name!");
}