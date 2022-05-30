/* Behavioral Design Patterns */
//Behavioral Design Patterns are specifically concerned with communication between objects.

/* Iterator */
//The iterator pattern is a design pattern in which an iterator is used to traverse a container and access the container’s elements.
//Iterator accesses the elements of an object without exposing its underlying representation.

//We will be taking an example of an array in which we print the values of an array and then by using an iterator we print its value backwords.

class Stuff {
  constructor() {
    this.a = 11;
    this.b = 22;
  }

  [Symbol.iterator]() {
    let i = 0;
    let self = this;
    return {
      next: function () {
        return {
          done: i > 1,
          value: self[i++ === 0 ? "a" : "b"],
        };
      },
    };
  }
  get backwards() {
    let i = 0;
    let self = this;
    return {
      next: function () {
        return {
          done: i > 1,
          value: self[i++ === 0 ? "b" : "a"],
        };
      },
      //make iterator iterable
      [Symbol.iterator]: function () {
        return this;
      },
    };
  }
}

//That’s how we will use this
let values = [100, 200, 300];
for (const index in values) {
  console.log(`Element at position ${index} is ${values[index]}`);
}
for (const val of values) {
  console.log(`Value is ${val}`);
}

let stuff = new Stuff();
for (const item of stuff) {
  console.log(`Item is ${item}`);
}
for (const item of stuff.backwards) {
  console.log(`Item in backward is ${item}`);
}
