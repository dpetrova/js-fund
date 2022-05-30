//A closure is a function that executes inside of another function and has access to the variables of the outer function.
//The inner function has access to all variables defined in its scope, the scope of its parent function, and the global variables.
//It’s important to note that at this time, the outer function can’t access the inner function variable.
function Outer() {
  const msg = "hello";
  function Inner() {
    console.log(msg);
  }
  return Inner;
}

var getValue = Outer;
getValue()();

//with args
function Outer(msg) {
  function Inner() {
    console.log(msg);
  }
  return Inner;
}

var getValue = Outer;
getValue("greet")();
