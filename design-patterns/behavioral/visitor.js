/* Behavioral Design Patterns */
//Behavioral Design Patterns are specifically concerned with communication between objects.

/* Visitor */
//It adds operations to objects without having to modify them.

//We will be taking an example of NumberExpression in which it gives us the result of the given expression.

class NumberExpression {
  constructor(value) {
    this.value = value;
  }
  print(buffer) {
    buffer.push(this.value.toString());
  }
}

class AdditionExpression {
  constructor(left, right) {
    this.left = left;
    this.right = right;
  }
  print(buffer) {
    buffer.push("(");
    this.left.print(buffer);
    buffer.push("+");
    this.right.print(buffer);
    buffer.push(")");
  }
}

//That’s how we will use this
let e = new AdditionExpression(
  new NumberExpression(5),
  new AdditionExpression(new NumberExpression(1), new NumberExpression(9))
);
let buffer = [];
e.print(buffer);
console.log(buffer.join(""));
