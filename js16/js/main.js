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

//Calculating the hypotenuse of a right angled triangle
let sideA = Number(prompt("Enter the dimensions for the height of the triangle"));
let sideB = Number(prompt("Enter the dimensions for the base of the triangle"))

let hyp = Math.sqrt(sideA **2 + sideB **2);
console.log(`The hypotenuse measures ${hyp}`);
alert(`The hypotenuse measures ${hyp}`);

let x = 2;
x+=2;
console.log(x);

//Arrray methods
//To add an element in a given position use the splice method
let myArray = ["square", "rectangle", "circle", "oval"];
myArray.splice(2, 0, "trapezoid", "pentagon");
console.log(myArray);

let arr8 = [2,6,7,8];
let findValue = arr8.find(function(e) {return e === 6});
//let findValue2 = arr8.find(e => e === 10);
console.log(findValue);

//This returns undefined since the value being found is not in the array
let findValue2 = arr8.find(function(a) {return a ===35});
console.log(findValue2);

//Sorting of values in the array
let names = ["Evelyne", "Jose", "Rose", "Raisa"];
console.log(names.sort());

//Task
let shoppingList = [];
shoppingList.push("Milk", "bread", "Apples");
console.log(shoppingList);
shoppingList.splice(1, 0, "bananas", "Eggs");
console.log(shoppingList);
let lastItem = shoppingList.pop();
console.log(lastItem);

let index = shoppingList.indexOf("Milk");
console.log(`The index value for milk is ${index}`);

let newList = ["Juice", "Milk"];
let wholeList = shoppingList.concat(newList);
console.log(wholeList);

let lastIndex = newList.lastIndexOf("Pop");
console.log(lastIndex);

//Nested Arrays
let arr = [1,2,3];
let newArray = [[1,2,3], [1,2,3], [1,2,3]];
console.log(newArray[0][1]);
let three = newArray[1][2];
console.log(three);

let myCar = {
  make : "Toyota",
  model : "Landcruiser",
  color : "Black",
  wheels : 4,
  age :3
}
console.log(myCar);
console.log(myCar.color);
myCar["color"] = "white";
console.log(myCar);

myCar.sale = "forsale";
console.log(myCar);

let company = { companyName: "Healthy Candy",
  activity: "food manufacturing",
  address: {
  street: "2nd street",
  number: "123",
  zipcode: "33116",
  city: "Miami",
  state: "Florida"
  },
  yearOfEstablishment: 2021
 };

company.address.city = "Nairobi";
console.log(company);

const theList = ['Laurence', 'Svekis', true, 35, null, undefined, {test: 'one', score: 55}, ['one', 'two']];
theList.pop();
theList.shift();
console.log(theList);
theList.unshift("FIRST");
console.log(theList);
theList[4] = "hello world!";
console.log(theList);
theList[3] = "MIDDLE";
console.log(theList);
//theList.splice(0, "First");
//console.log(theList);

//Company Product Catalog
let catalog = [];
let products = {
  name : ["Sugar", "Body Splash", "Hair Fertilizers"],
  model : ["Mumias Sugar", "White Horse", "Bamsi"],
  cost : [200, 700, 180],
  quantity: ["10kg", "20 Bottles", "30 Containers"]
};
catalog.push(products);
console.log(catalog);
console.log(catalog.products[0[0]],[1[0]],[2[0]]);

let fullcatalog = [products.name, products.model, products.cost];
console.log(fullcatalog);