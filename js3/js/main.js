//Conditionals: If Statement

let customerIsBanned = false;
let soup = "Chicken noodle soup";
let crackers = false;
let reply;
if (customerIsBanned){
  reply = "There is no soup for you!";
}else if (soup && crackers){
  reply = `Here is your order of ${soup} and crackers.`;
}else if (soup){
  reply = `Here is your order of ${soup}`;
}else {
  reply = "Sorry we are out of soup. ";
}
console.log(reply);

let testScore = 19;
let collegeStudent = true;
let grade;
if (testScore >=90){
  grade = "A";
}else if (testScore >=80){
  grade = "B";
}else if (testScore >=70){
  grade = "C";
}else if (testScore >=60){
  grade = "D";
}else {
  if (collegeStudent){
    grade = "U";
  }else{
    grade = "E";
  }
 }
console.log(grade);


