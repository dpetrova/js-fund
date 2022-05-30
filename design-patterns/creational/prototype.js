/* Creational Design Patterns */
//Creational Design Patterns will create objects for you instead of instantiating an object directly.

/* Prototype */
//It creates new objects from the existing objects.

//We will be using the example of a car.

class Car {
  constructor(manufacturer, model) {
    this.manufacturer = manufacturer;
    this.model = model;
  }

  setManufacturer(manufacturer) {
    console.log(manufacturer);
  }

  clone() {
    return new Car(this.manufacturer, this.model);
  }
}

//This is how we will use it
let car = new Car();
car.setManufacturer("Audi");
let car2 = car.clone();
car2.setManufacturer("Volkswagen");
