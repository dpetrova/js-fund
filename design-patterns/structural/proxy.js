/* Structural Design Patterns */
//These patterns concern class and object composition.
//They ease the design by identifying a simple way to realize relationships among entities.
//They use inheritance to compose interfaces.

/* Proxy */
//A proxy, in its most general form, is a class functioning as an interface to something else.
//By using Proxy, a class can represent the functionality of another class.

//Let’s take the example of value proxy.

class Percentage {
  constructor(percent) {
    this.percent = percent;
  }
  toString() {
    return `${this.percent}%`;
  }
  valueOf() {
    return this.percent / 100;
  }
}

//This is how we will use it
let fivePercent = new Percentage(5);
console.log(fivePercent.toString());
console.log(`5% of 50 is ${50 * fivePercent}`);
