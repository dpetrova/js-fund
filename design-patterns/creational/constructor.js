/* Creational Design Patterns */
//Creational Design Patterns will create objects for you instead of instantiating an object directly.

/* Constructor */
//It allows us to initialize new objects with specific methods and properties.
//We can use the constructor pattern when creating many instances of the same template.
//These instances may differ, but they can share their methods.

// Creating constructor
function Tree(name, height, scientificname) {
  this.name = name;
  this.height = height;
  this.scientificname = scientificname;
  // Declaring a method
  this.getData = function () {
    return this.name + " has a height of " + this.height;
  };
}

// Creating new instance
const Coconut = new Tree("coconut", "30m", "cocos nucifera");
console.log(Coconut.getData()); // coconut has a height of 30m
