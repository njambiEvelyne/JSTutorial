//JavaScript Errors and Error Handling
"use strict" ;
const variable = "Evelyne";
console.log(variable);

//Using the try...catch to hold of errors
const makeError = () => {
  try{
    const name = "Dave";
    name = "Joe";
  }catch(err){
    console.error(err);
  }
}
makeError();
 
const number = () => {
  try{
    const num = Number(prompt("Enter the number"));
  }catch(err){
    console.warn(err);
  }
}

number();