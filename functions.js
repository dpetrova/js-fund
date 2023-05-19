// 1: Function self-execution
const Func = (function () {})(); // Commonly used
(function () {})(); // Commonly used
[(function () {})()];
+(function () {})();
-(function () {})();
~(function () {})();
!(function () {})();
new (function () {})();
new (function () {})();
void (function () {})();
typeof (function () {})();
delete (function () {})();
1, (function () {})();
1 ^ (function () {})();
1 > (function () {})();

// 2.One-time function
//Good for running some initialization code that only needs to be executed once.
//console.log("x") only at first execution, and every other time will conlole.log("y")
function Func() {
  console.log("x");
  Func = function () {
    console.log("y");
  };
}
Func(); //console.log("x")
Func(); //console.log("y")
Func(); //console.log("y")

// 3: Lazy loading functions
//When there are more and more complex judgment branches in the function, the resource overhead can be greatly saved.
// ❌
function Func() {
  if (a === b) {
    console.log("x");
  } else {
    console.log("y");
  }
}
// ✅
function Func() {
  if (a === b) {
    Func = function () {
      console.log("x");
    };
  } else {
    Func = function () {
      console.log("y");
    };
  }
  return Func();
}

// 4: Detect non-null parameters
function IsRequired() {
  throw new Error("param is required");
}
function Func(name = IsRequired()) {
  console.log("I Love " + name);
}
Func(); // "param is required"
Func("You"); // "I Love You"

// 5: String creation function
const Func = new Function("name", 'console.log("I Love " + name)');

// 6: Handle error messages gracefully
try {
  Func();
} catch (e) {
  location.href = "https://stackoverflow.com/search?q=[js]+" + e.message;
}

// 7: Handle Async/Await parameters gracefully
function AsyncTo(promise) {
  return promise.then((data) => [null, data]).catch((err) => [err]);
}
const [err, res] = await AsyncTo(Func());

// 8: Handle multiple function return values gracefully
function Func() {
  return Promise.all([fetch("/user"), fetch("/comment")]);
}
const [user, comment] = await Func();

// 9: function: sum(a)(b)….(n)() that should return the sum of all the numbers a+b+c+...+n
const sum = (a) => (b) => (c) => (d) => (e) => () => a + b + c + d + e;
console.log(sum(1)(2)(3)(4)(5)());

// 9: Fibonacci sequence and its optimization
let fibbonacci = function (n) {
  if (n < 1) throw new Error("invalid params");
  if (n === 1 || n === 2) return 1;
  return fibbonacci(n - 1) + fibbonacci(n - 2);
};

const memory = function (fn) {
  let obj = {};
  return function (n) {
    if (obj[n] === undefined) obj[n] = fn(n);
    return obj[n];
  };
};

fibbonacci = memory(fibbonacci);

// 10. Arguments
//We have used arguments to get arguments passed to a function.
//The cool thing about this is that we can get the arguments passed to a function with the arguments object without explicitly defining the arguments variables in the function:
function myFunc() {
  arguments[0]; // 34
  arguments[1]; // 89
}
myFunc(34, 89);

// 11. Fuction returning function
function outer() {
  return function () {
    return "Hi there!";
  };
}
outer()(); //Hi there!
