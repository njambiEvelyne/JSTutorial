//JSON: JavaScript object Notation
/*
JSON is used to send and receive data.
JSON is text format that is completely language independent.
Meaning JSON is used to send & receive data in many languages .... not just in javascript.
*/
const myObj = {
  name: "Dave",
  hobbies: ["Eat", "Sleep", "code"],
  hello : function (){
    console.log("Hello!");
  }
} 
console.log(myObj);
console.log(myObj.name);
console.log(myObj.hobbies);
myObj.hello();
console.log(typeof myObj);

const sendJSON = JSON.stringify(myObj);
console.log(sendJSON);
console.log(typeof sendJSON);

const receiveJSON = JSON.parse(sendJSON);
console.log(receiveJSON);
console.log(typeof receiveJSON);