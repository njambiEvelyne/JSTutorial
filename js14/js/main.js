//JavaScript Errors and Error Handling
"use strict" ;
const variable = "Evelyne";
console.log(variable);

//Using the try...catch to hold of errors
const makeError = () => {
  try{
    throw new customError("This is a custom error!");
  }catch(err){
    console.error(err.name);
    console.error(err.message);
    console.error(err.stack);
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

function customError(message){
  this. message = message;
  this.name = "customError";
  this.stack = `${this.name}: ${this.message}`;
}