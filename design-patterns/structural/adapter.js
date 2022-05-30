/* Structural Design Patterns */
//These patterns concern class and object composition.
//They ease the design by identifying a simple way to realize relationships among entities.
//They use inheritance to compose interfaces.

/* Adapter */
//This pattern allows classes with incompatible interfaces to work together by wrapping their own interface around existing class

//We are using an example of a calculator.
//CalculatorOld is an old interface and CalculatorNew is a new interface.
//We will be building an adapter that will wrap up the new interface and will give us results using its new methods

//old class
class CalculatorOld {
  constructor() {
    this.operations = function (val1, val2, operation) {
      switch (operation) {
        case "add":
          return val1 + val2;
        case "sub":
          return val1 - val2;
      }
    };
  }
}

//new class
class CalculatorNew {
  constructor() {
    this.add = function (val1, val2) {
      return val1 + val2;
    };

    this.sub = function (val1, val2) {
      return val1 - val2;
    };
  }
}

//adapter
class CalculatoAdapter {
  constructor() {
    const calcNew = new CalculatorNew();
    this.operations = function (val1, val2, operation) {
      switch (operation) {
        case "add":
          return calcNew.add(val1, val2);
        case "sub":
          return calcNew.sub(val1, val2);
      }
    };
  }
}

//This is how we will use it
const adapter = new CalculatoAdapter();
adapter.operations(10, 55, "add");
