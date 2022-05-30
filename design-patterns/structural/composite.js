/* Structural Design Patterns */
//These patterns concern class and object composition.
//They ease the design by identifying a simple way to realize relationships among entities.
//They use inheritance to compose interfaces.

/* Composite */
//It describes a group of objects that are treated the same way as a single instance of the same type of object

//We will be using job examples

class Employer {
  constructor(name, role) {
    this.name = name;
    this.role = role;
  }

  print() {
    console.log(`name: ${this.name}, role: ${this.role}`);
  }
}

//group employer
class EmployerGroup {
  constructor(name, composite = []) {
    this.name = name;
    this.composite = composite;
  }

  print() {
    this.composite.forEach((x) => x.print());
  }
}

//This is how we will use it
let pesho = new Employer("pesho", "developer");
let gosho = new Employer("gosho", "devop");
let groupDevs = new EmployerGroup("devs", [pesho, gosho]);
groupDevs.print();
