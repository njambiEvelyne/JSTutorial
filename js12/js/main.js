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
