// //DOM: Document Object Model
// const view = document.getElementById("view1");
// console.log(view1);

// const view2 = document.querySelector("#view2");
// console.log(view2);

// //To change the style to show/hide the different views
// //1. Showing view1 and hiding view2
// view1.style.display = "flex";
// view2.style.display = "none";

// //2.//Showing view2 while hiding view1
// view1.style.display = "none";
// view2.style.display = "flex";


// const views = document.getElementsByClassName("views");
// console.log(views);

// const sameView = document.querySelectorAll("view");
// console.log(sameView); 

for (i=0; i<10; i++){
  if (i ===3){
    break;
  }
  console.log(i);
}

let nr1 = 12;
let nr2 = 14;
let result = nr1 + nr2;
console.log(result);

console.log("Hello, what's our name? Is it \"Mike\"?");
let nr3 = 30;
let nr4 = 5;
let result1 = nr3 / nr4;
console.log(result1);


//Exponentiation
let nr5 = 2;
let nr6 = 3;
let result2 = nr5 ** nr6;
console.log(result2);

//Modulus
let numi = 7;
let num2 = 2;
let ans = numi % num2;
console.log(`${numi} % ${num2} = ${ans}`);