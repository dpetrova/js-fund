/* Structural Design Patterns */
//These patterns concern class and object composition.
//They ease the design by identifying a simple way to realize relationships among entities.
//They use inheritance to compose interfaces.

/* Decorator */
//It dynamically adds or overrides the behavior of an object, without affecting the behavior of other objects from the same class.

//We will be taking the example of color and shapes.
//If we have to draw a circle we will create methods and will draw a circle.
//If we have to draw a red circle. Now the behavior is added to an object and the Decorator pattern will help me in that.

class Shape {
  constructor(color) {
    this.color = color;
  }
}

class Circle extends Shape {
  constructor(radius = 0) {
    super();
    this.radius = radius;
  }

  resize(factor) {
    this.radius *= factor;
  }

  toString() {
    return `A circle ${this.radius}`;
  }
}

class ColoredShape extends Shape {
  constructor(shape, color) {
    super();
    this.shape = shape;
    this.color = color;
  }

  toString() {
    return `${this.shape.toString()} has color ${this.color}`;
  }
}

//This is how we will use it
let circle = new Circle(2);
console.log(circle.toString());
let redCircle = new ColoredShape(circle, "red");
console.log(redCircle.toString());
