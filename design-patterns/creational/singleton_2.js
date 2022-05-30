/* Singleton Design Pattern */

//There is only one instance of a class.
//The primary motive for limiting the instantiation of a class is to maintain control over shared resources such as databases, stores, and files.
//With this technique, we construct a class instance and give that instance global access.

class Store {
  static instance;
  constructor() {
    if (!Store.instance) {
      this._state = [];
      Store.instance = this;
    }
    return Store.instance;
  }
  add(stuff) {
    this._state.push(stuff);
  }
}

const instance = new Store();
Object.freeze(instance); //frozen object can no longer be changed

export default instance;

// In other files
const a = new Store();
a.add("phone");

const b = new Store();
console.log(b._state); // outputs ["phone"] - shared state
