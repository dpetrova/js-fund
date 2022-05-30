/* Creational Design Patterns */

/* Prototype */
//The prototype pattern clones the attributes of an existing object into new objects.
//The basic concept of this design pattern is prototypal inheritance.
//It is about creating an object that acts as a prototype when instantiating new objects.
//We are using the Object.create feature of JavaScript to implement this.

const bus = {
  wheels: 4,
  start() {
    return "started";
  },
  stop() {
    return "stopped";
  },
};

// create object
const myBus = Object.create(bus, { model: { value: "Single deck" } });
console.log(myBus.__proto__ === bus); // true
