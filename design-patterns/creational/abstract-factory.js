/* Creational Design Patterns */
//Creational Design Patterns will create objects for you instead of instantiating an object directly.

/* Abstract Factory */
//It creates families or groups of common objects without specifying their concrete classes.

//We will be using the example of a Drink and Drink making machine.

class Drink {
  consume() {}
}

class Tea extends Drink {
  consume() {
    console.log("This is Tea");
  }
}

class Coffee extends Drink {
  consume() {
    console.log("This is Coffee");
  }
}

class DrinkFactory {
  prepare(amount) {}
}

class TeaFactory extends DrinkFactory {
  makeTea() {
    return new Tea();
  }
}

class CoffeeFactory extends DrinkFactory {
  makeCoffee() {
    return new Coffee();
  }
}

//This is how we will use it
let teaDrinkFactory = new TeaFactory();
let tea = teaDrinkFactory.makeTea();
tea.consume();
