/* Behavioral Design Patterns */
//Behavioral Design Patterns are specifically concerned with communication between objects.

/* Observer */
//The one-to-many relationship between the numerous objects is the basis for this design pattern.
//It enables you to set up a subscription mechanism that permits other entities to be alerted of each occurrence on the entity to which you are subscribed
//An object, named the subject, maintains a list of its dependents, called observers, and notifies them automatically of any state changes, usually by calling one of their methods.

//We will be taking an example of a person in which if a person falls ill, it will display a notification.

class Event {
  constructor() {
    this.handlers = new Map();
    this.count = 0;
  }
  subscribe(handler) {
    this.handlers.set(++this.count, handler);
    return this.count;
  }
  unsubscribe(idx) {
    this.handlers.delete(idx);
  }
  fire(sender, args) {
    this.handlers.forEach((v, k) => v(sender, args));
  }
}

class getillArgs {
  constructor(address) {
    this.address = address;
  }
}

class Person {
  constructor(address) {
    this.address = address;
    this.getIll = new Event();
  }
  catchCold() {
    this.getIll.fire(this, new getillArgs(this.address));
  }
}

//That’s how we will use this
let person = new Person("Saint Kl.Ohridski str. 100");
let sub = person.getIll.subscribe((s, a) => {
  console.log(`A doctor has been called to ${a.address}`);
});

person.catchCold();
person.catchCold();

person.getIll.unsubscribe(sub);
person.catchCold();
