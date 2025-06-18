//Scope
//var, let, const
//var is an old method for coding. It does not pop out the error when a variable is redeclared as shown

var x =1;
var x =2;
console.log(x);

let a = 1; 
a= 4;
console.log(a);

const y = 1;
console.log(y);

//Global scope
var b = 9;
let u = 7;
const i = 5;


//Local scope
//1. Block scope
{
  let r = 4;
  console.log(r);

}
//2. Function scope
function myFunction(){
  const z = 5;
  console.log(z);
}
console.log(r)

