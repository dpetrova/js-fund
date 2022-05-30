/* Structural Design Patterns */
//These patterns concern class and object composition.
//They ease the design by identifying a simple way to realize relationships among entities.
//They use inheritance to compose interfaces.

/* Flyweight */
//It reduces the memory cost of creating similar objects.
//A flyweight is an object that minimizes memory usage by sharing as much data as possible with other similar objects.

// Let’s have multiple users with the same name.
//We can save our memory by storing a name and give it a reference to the users having the same names.

class User {
  constructor(fullname) {
    this.fullname = fullname;
  }
}

class User2 {
  constructor(fullname) {
    let getOrAdd = function (s) {
      let idx = User2.strings.indexOf(x);
      if (idx !== -1) return idx;
      else {
        User2.strings.push(s);
        return User2.strings.length - 1;
      }
    };

    this.names = fullname.split(" ").map(getOrAdd);
  }
}

User2.strings = [];
