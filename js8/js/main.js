//Functions
//Methods are built-in methods
//Function declaration
function sum(num1, num2)  {
  num1 = Number(prompt("Enter the first number."));
  num2 = Number(prompt("Enter the second number."));
  return num1 + num2;
}

console.log(sum());

function getUserNameFromEmail(email){
  email = prompt("Enter your email account.");
   return email.slice(0, email.indexOf("@"));
}
console.log(getUserNameFromEmail());

const emailLetters = function getEmail (emailAddress){
  emailAddress = prompt("Enter your email address.");
  return emailAddress.slice(0, indexOf("@"));
}
console.log(emailLetters);
for (i = 0; i<= emailAddress.length; i++){
  console.log(i);
}
//Arrow Functions
const getNameFromEmail = (email1) => {
  return email1.slice("@");
}
console.log(getNameFromEmail("evelynenganga76@gmail.com"));