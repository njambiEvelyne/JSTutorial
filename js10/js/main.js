//Greetings
// let name = prompt("What is your name?");
// let greeting = alert(`Hello ${name}. Hope you are doing great today.`);
// console.log("Hello " + name + ". Hope you are doing great!");


//Arrays
const myArray = [] ;
//Adding elements
myArray[0]= "Evelyne";
myArray[1] = 1001;
myArray[2] = false;

//refer to an array
console.log(myArray);

//length property
console.log(myArray.length);

//Last element in an array
console.log(myArray[myArray.length - 1]);
console.log(myArray[2]);
console.log(myArray.length - 2) ;

myArray.push("school", 2000, "pupil");
console.log(myArray);

//Removing last  element from an array
let od = myArray.pop();
console.log(`Popped Array: ${myArray}`);
console.log(od);
//holding the removed element in an array and record it as an array
let odd = [myArray.pop()];
console.log(`Arrayed popped array: ${myArray}`);
console.log(odd);

//Adding an element at the beginnning of an array 
myArray.unshift(42, "Evelyne");
console.log(`Added first element: ${myArray}`);

const newLength = myArray.push(42);
console.log(newLength);

//Removing the first element of an array
let shiffted = myArray.shift();
console.log(shiffted);
