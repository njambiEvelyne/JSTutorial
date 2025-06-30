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