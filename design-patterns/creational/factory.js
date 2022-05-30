/* Creational Design Patterns */
//Creational Design Patterns will create objects for you instead of instantiating an object directly.

/* Factory */
//The constructor accepts various arguments to return the desired object.
//This pattern is ideal for situations where we need to deal with different object groups with similar characteristics.

//For example, consider a food manufacturing factory.
//If you ask for a cake, they give you a cake. If you want bread, they give you bread.

function foodFactory() {
  this.createFood = function (foodType) {
    let food;
    switch (foodType) {
      case "cake":
        food = new Cake();
        break;
      default:
        food = new Bread();
        break;
    }
    return food;
  };
}

const Cake = function () {
  this.givesCustomer = () => {
    console.log("This is a cake!");
  };
};

const factory = new foodFactory();
const cake = factory.createFood("cake");
cake.givesCustomer();
