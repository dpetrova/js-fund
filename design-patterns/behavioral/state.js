/* Behavioral Design Patterns */
//Behavioral Design Patterns are specifically concerned with communication between objects.

/* State */
//It alters the behavior of an object when its internal state changes.

//We will be taking an example of a light switch in which if we turn on or off the switch, its state changes.

class State {
  constructor() {
    if (this.constructor === State) throw new Error("Abstract!");
  }
  on() {
    console.log("Light is already on.");
  }
  off() {
    console.log("Light is already off.");
  }
}

class OnState extends State {
  constructor() {
    super();
    console.log("Light turned on.");
  }
  off(sw) {
    console.log("Turning light off...");
    sw.state = new OffState();
  }
}

class OffState extends State {
  constructor() {
    super();
    console.log("Light turned off.");
  }
  on(sw) {
    console.log("Turning light on...");
    sw.state = new OnState();
  }
}

//Let’s create a Switch class to use these On/Off state
class Switch {
  constructor() {
    this.state = new OffState();
  }
  on() {
    this.state.on(this);
  }
  off() {
    this.state.off(this);
  }
}

//Let’s use Switch class
let sw = new Switch();
sw.on();
sw.off();
