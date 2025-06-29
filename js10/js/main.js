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

//This method is used to add an element to an array
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

//Array methods
const secondArray= ["A", "B", "C", "D", "E", "F"];
console.log(`The standard array before slicing: ${secondArray}`);

//slice method
//The slice method displays value from the specified index
newArray = secondArray.slice(2);
console.log(`New array after slicing in the second index: ${newArray}`);
arrayThree = secondArray.slice(2,4);
console.log(arrayThree);

//reverse method
//This method is used to reverse the order of the elements in an array
const name = secondArray.reverse();
console.log(`Reversed array: ${name}`);

//join method
//This method converts an array to a string
let joined = secondArray.join();
console.log(`Joined array to a string ${joined}`);

//concat method
const myArrayA = ["A", "B", "C", "D"];
const myArrayB = ["x", "Y", "Z"];
let contArray = myArrayA.concat(myArrayB);
console.log(`Concatinated array: ${contArray}`);

//spread method
//This method spraeds out the contents of te array. It is represented using three dots
// let spread = [...myArrayA, ...myArrayB];
// console.log("Spreaded array: " + spread);

// const equipShelfA = ["baseball", "football", "volleyball"];
// const equipShelfB = ["basketball", "golf balls", "tennis balls"];

// const clothesShelfA = ["tank tops", "t-shirts", "jerseys"];
// const clothesShelfB = ["sweat tops", "sweat pants", "hoodies"];