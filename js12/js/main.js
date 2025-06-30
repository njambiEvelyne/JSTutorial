//classes
class Pizza{
  constructor(PizzaType){
    this.type = PizzaType;
    this.size = "medium";
    this.crust = "original";
  }
  bake (){
    console.log(`Baking a ${this.size} ${this.crust} ${this.type} crust pizza.`);
  }
}

//Creating an object from the class
const myPizza = new Pizza("Pepperoni");
myPizza.bake();


//Parent class for the student
class Persons{
  constructor(name, age){
    this.name = name;
    this.age = age;
    
  }
  //Method
  greet(){
    console.log(`My name is ${this.name} and I'm ${this.age} years old.`)
  }
}
//Creating an object from the the persons class
const persion1 = new Persons("Evelyne", 20);
persion1.greet(); //Output the name as well as the age


//CLASS INHERITANCE
//This subclass will inherit from the parent class that constituted of the the person to creaet a student subclass
class Student extends Persons{
  constructor(name, age, course){
    super(name, age);
    this.course = course;
  }
  study (){
    console.log(`${this.name} is studying ${this.course}.`);
  }
}
const student1 = new Student("Brian", 22, "Computer Science");
student1.greet();
student1.study();

//Using the get and set methods in classes
class User{
  constructor(name, age){
    this.name = name;
    this.age = age;
  }
  //Getter
  get name (){
    return this.name.toUpperCase();//Custom behaviour when getting
  }
  //Setter
  set name(newName){
    if (newName.length <3){
      console.log("Name must be atleast three characters long.")
    }
    else{
      this.name = newName;
    }
  }
  personal (){
    console.log(`My name is ${this.name} and I'm ${this.age} years old.`)
  }
}

const person5 = new User("RoSeMary Muthoni", 17);
person5.personal();

class Students{
  constructor(name, age, course, regno){
    this.name = name;
    this.age = age;
    this.course = course;
    this.registeration = regno;
  }
  get name(){
    return this.name.toUpperCase();
  }
  set name(name2){
    if (name2 <4){
      console.log("Name must be more than 4 characters long.");
    }
    else{
      this.name = name2;
    }
  }
  output (){
    console.log(`My name is ${this.name}. I'm ${this.age} years old. I'm pursing ${this.course} in a university.`);
  }
}
student4 = new Students("Bob", 23, "Computer Science", "IN16/OO56/24");
student4.output();