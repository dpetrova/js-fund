/* Creational Design Patterns */
//Creational Design Patterns will create objects for you instead of instantiating an object directly.

/* Singleton */
//It ensures that there’s only one instance created for a particular class.

class Singleton {
  constructor() {
    const instance = this.constructor.instance;
    if (instance) {
      return instance;
    }
    this.constructor.instance = this;
    this.items = [];
  }

  addItem(item) {
    this.items.push(item);
  }
}

//This is how we will use it
let s1 = new Singleton();
let s2 = new Singleton();
s1.addItem("Item_1");
console.log(s1 === s2); // true
console.log(s1.items); // [ 'Item_1' ]
console.log(s2.items); // [ 'Item_1' ]
