/* Creational Design Patterns */
//Creational Design Patterns will create objects for you instead of instantiating an object directly.

/* Factory Method */
//It defines an interface for creating a single object and lets child classes decide which class to instantiate.

//Let’s take an example of a point.
//We have a class of points and we have to create a Cartesian point and a Polar point.
//We will define a Point factory that will do this work

CoordinateSystem = {
  CARTESIAN: 0,
  POLAR: 1,
};

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

class PointFactory {
  static newCartesianPoint(x, y) {
    return new Point(x, y);
  }

  static newPolarPoint(rho, theta) {
    return new Point(rho * Math.cos(theta), rho * Math.sin(theta));
  }
}

//This is how we will use this class
let point = PointFactory.newPolarPoint(5, Math.PI / 2);
let point2 = PointFactory.newCartesianPoint(5, 6);
console.log(point);
console.log(point2);
