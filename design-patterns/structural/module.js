/* Structural Design Patterns */

/* Module */
//This pattern is similar to encapsulation.
//It lets you change and update a particular piece of code without affecting other components.

//As JavaScript does not have access specifiers like public or private, we can use this module pattern to implement encapsulation where necessary.
//We use closures (a function that can access the parent scope even after the parent function is closed) and an immediately invoked function expression (IIFE) to implement it.
//We can use this design pattern to emulate encapsulation and hide certain components from the global scope.

function FoodContainter() {
  const container = [];
  function addFood(name) {
    container.push(name);
  }
  function getAllFood() {
    return container;
  }
  function removeFood(name) {
    const index = container.indexOf(name);
    if (index < 1) {
      throw new Error("This food is unavailable");
    }
    container.splice(index, 1);
  }

  return {
    add: addFood,
    get: getAllFood,
    remove: removeFood,
  };
}

const container = FoodContainter();
container.add("Cake");
container.add("Bread");

console.log(container.get()); // Gives both cake and bread
container.remove("Bread"); // Removes bread
