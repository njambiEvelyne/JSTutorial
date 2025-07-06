class Student {
  constructor(name, age, grade){
    this.name = prompt(`Enter your name`);
    this.age = prompt(`Enter your age `);
    this.grade = prompt(`Enter your grade`);
  }
  getDetails(){
    console.log(`My name is ${this.name}. \nI am ${this.age} years old.\nI scored ${this.grade} grade in my course`)
  }
}

const student1 = new Student();
student1.getDetails();