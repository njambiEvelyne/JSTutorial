const vehicle = {
  wheel : 4,
  engine: function(){
    return "Vroooo!";
  }
}

// const truck = Object.create(vehicle);
// truck.doors = 2;
// console.log(truck);
// console.log(truck.wheel)
// console.log(truck.engine());
//Inheritance 
 
const car = Object.create(vehicle);
car.doors = 4;
car.engine = function (){
  return "Whooooo!"
}
console.log(car.engine);
console.log(car.wheel);

const tesla = Object.create(car);
console.log(tesla.wheel);
tesla.engine = function(){
  return "Shhhhh...";
};
console.log(tesla.engine()); 

console.log("This will return values inherited from objects.");
const band = {
  vocals : "Robert Plant", 
  guitar : "Jimmy Page",
  bass : "John Paul Jones",
  drums : "John Bonham"
};

band.keyboards = "Evans";
console.log(Object.keys(band));
console.log(Object.values(band));
console.log(band.vocals);

for (job in band){
  console.log(band[job]);
};

for (let job in band){
  console.log(`On ${job}, its ${band[job]}!`);
}
//Deleting of elements in an object
delete band.drums;
console.log(band);
//checking for properties
console.log(band.hasOwnProperty("drums"));