/* Behavioral Design Patterns */
//Behavioral Design Patterns are specifically concerned with communication between objects.

/* Mediator */
//The mediator pattern adds a third-party object to control the interaction between two objects.
//It allows loose coupling between classes by being the only class that has detailed knowledge of their methods.

//We will be using an example of a person using a chat room. Here, a chatroom acts as a mediator between two people communicating.

class Person {
  constructor(name) {
    this.name = name;
    this.chatlog = [];
  }
  recieve(sender, message) {
    let s = `${sender}: ${message}`;
    console.log(`[${this.name}'s chat session] ${s}`);
    this.chatlog.push(s);
  }
  say(message) {
    this.room.broadcast(this.name, message);
  }
  pm(who, message) {
    this.room.message(this.name, who, message);
  }
}

//Creating chat room
class Chatroom {
  constructor() {
    this.people = [];
  }
  broadcast(source, message) {
    for (const p of this.people) {
      if (p.name !== source) p.recieve(source, message);
    }
  }
  join(p) {
    let joinMsg = `${p.name} joins the chat`;
    this.broadcast("room", joinMsg);
    p.room = this;
    this.people.push(p);
  }
  message(source, destination, message) {
    for (const p of this.people) {
      if (p.name === destination) p.recieve(source, message);
    }
  }
}

//That’s how we will use this
let room = new Chatroom();
let john = new Person("John");
let ivan = new Person("Ivan");
room.join(john);
room.join(ivan);
john.say("Hello");
let dani = new Person("Dani");
room.join(dani);
dani.say("Hellow everybody");
