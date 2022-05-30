/* 1. Use object instead of “switch” */
// ❌
const n = 1;
let result;
switch (n) {
  case 1:
    result = "res-1";
    break;
  case 2:
    result = "res-2";
    break;
  case 3:
    result = "res-3";
    break;
  // ...There are a lot more
}
// ✅
const n = 1;
const nMap = {
  1: "res-1",
  2: "res-2",
  3: "res-3",
};
const result = nMap[n];

/* 2. Use the “includes” method instead of multiple “if” */
// ❌
const n = 1;
if (n === 1 || n === 2 || n === 3 || n === 4 || n === 5) {
  // ...
}
// ✅
const n = 1;
const conditions = [1, 2, 3, 4, 5]; // You just need to add new numbers here
if (conditions.includes(n)) {
  // ...
}

/* 3. Use the default parameters of the ES6 function */
// ❌
const func = (name) => {
  name = name || "fatfish";
  console.log(name);
};
// ✅
const func = (name = "fatfish") => {
  console.log(name);
};

/* 4. Use ternary operator instead of “if… else…” */
// ❌
const n = 18;
let result;
if (n % 2 === 0) {
  result = "even number";
} else {
  result = "odd number";
}
// ✅
const n = 18;
let result = n % 2 === 0 ? "even number" : "odd number";

/* 5. Use “+” to convert string to number */
// ❌
let str = "123.5";
let num = Number(str); // 123.3
let num2 = parseInt(str); // 123
let num3 = parseFloat(str); //12.3
// ✅
let num = +str; // 123

/* 6. Use “JSON.stringify” to output prettier information */
const bigObj = {
  name: "fatfish",
  obj: {
    name: "fatfish",
    obj: {
      name: "fatfish",
      obj: {
        name: "fatfish",
        obj: {
          name: "fatfish",
          // ...
        },
      },
    },
  },
};

// ❌
console.log(bigObj);
// ✅
console.log(JSON.stringify(bigObj, null, 2));
console.log(JSON.stringify(bigObj, null,'\t'));

/* 7. Initialize the array with “fill” */
// ❌
let array = [];
const len = 100;
for (let i = 0; i < len; i++) {
  array[i] = "fatfish";
}
// ✅
let array = Array(100).fill("fatfish");

/* 8. Get mouse position */
//The user’s mouse position is stored in the clientX and clientY properties on the built-in MouseEvent object.
document.addEventListener(type: 'mousemove', listener: (e: MouseEvent) => {
  console.log(`Mouse X: ${e.clientX}, Mouse Y: ${e.clientY}`)
})

/* 9. Simulate the browser’s “back” and “forward” buttons */
<button onclick="window.history.back()">Back</button>
<button onclick="window.history.forward()">Forward</button>

/* 10. Use the optional chaining operator (?.) for objects or arrays to avoid “undefined” error */
const response = [{
  product: {
    category: 'PC components',    
    owner: {
      id: '9489n4g8904984',
      name: "John Smith",
      email: "john@gmail.com"
    }
  }
}]

// ❌
if(response && response.length && response[0].product && response[0].product.owner && response[0].product.owner.name) {
  console.log(response[0].product.owner.name)
}
// ✅
if(response?.[0]?.product?.owner?.name) {
  console.log(response[0].product.owner.name)
}

/* 11. Get the integer part of a number */
let number = 12.4895746
//use ~~, which is actually two bitwise NOT operators ( ~ )used together
console.log(~~number)
//use Math.trunc()
console.log(Math.trunc(number))

/* 12. Method Parameter Validation */
//JavaScript allows you to set default values for your parameters. Using this, we can implement a neat trick to validate your method parameters.
const isRequired = () => { throw new Error('param is required'); };
const print = (num = isRequired()) => { console.log(`printing ${num}`) };
print(2);//printing 2
print()// error

/* 13. Removing Falsy Values From Arrays */
//Falsy values are values in JavaScript which evaluate to FALSE: undefined, null, NaN, 0, “” (empty string), false
const myArray = [1, 0, undefined, "some", "", true, false]
myArray.filter(Boolean); // [1, 'some', true]

/* 14. Merge Several Objects Together */
const user = { name: 'John Ludwig', gender: 'Male' };
const college = { primary: 'Mani Primary School', secondary: 'Lass Secondary School' };
const skills = { programming: 'Extreme', swimming: 'Average', sleeping: 'Pro' };
const summary = {...user, ...college, ...skills};

/* 15. Can “x !== x” return true？ */
//There is a value NaN in JavaScript, which is not equal to any value or even itself.
const x = NaN 
if (x !== x) {
  console.log('hello fatfish')
}
console.log(NaN === NaN) // false
console.log(x !== x) // true

//Object.defineProperty
window.x = 0 // Any value is OK
Object.defineProperty(window, 'x', {
  get () {
    return Math.random()
  }
})
console.log(x) // 0.12259077808826002
console.log(x === x) // false
console.log(x !== x) // true

/* 16. How to make “x === x + 1”? */
//“The Number.MAX_SAFE_INTEGER constant represents the maximum safe integer in JavaScript (2⁵³ — 1).”
const x = Number.MAX_SAFE_INTEGER + 1// Please fill in the value of "x?
if (x === x + 1) {
  console.log('hello fatfish')
}

/* 17. typeof x === ‘undefined’ && x.length > 0 ? */
//document.all
const x = document.all
if(typeof x === 'undefined' && x.length > 0) {
  console.log('hello fatfish')
}
console.log(x)
console.log(typeof x)
console.log(x === undefined)

/* 18. Decimal base exponents */
//This tip allows you to write numbers with trailing zeros in more fancy way.
1e1 === 10
1e2 === 100
1e3 === 1000
1e4 === 10000
1e5 === 100000

// 19. get random int
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max))
}

// 20. get random string
function getRandomString(length) {
  let result = []
  for (let index = 0; index < length; index++) {
    result.push(String.fromCharCode(65 + getRandomInt(26)))  
  }
  return result.join("")
}

/* 21. Declaring variables */
//Longhand ❌
let x; 
let y = 20; 
//Shorthand ✅
let x, y = 20;

/* 22. Assigning values to multiple variables */
//Longhand ❌
let a, b, c; 
a = 5; 
b = 8; 
c = 12;
//Shorthand ✅
let [a, b, c] = [5, 8, 12];

/* 23. Assigning a default value */
//Longhand ❌
let imagePath; 
let path = getImagePath(); 
if(path !== null && path !== undefined && path !== '') { 
  imagePath = path; 
} else { 
  imagePath = 'default.jpg'; 
} 
//Shorthand ✅
let imagePath = getImagePath() || 'default.jpg';
//or
let imagePath = getImagePath() ?? 'default.jpg';

/* 24. AND(&&) Short circuit evaluation */
//Longhand ❌
if (isLoggedin) {
  goToHomepage(); 
 } 
//Shorthand ✅
isLoggedin && goToHomepage();
//in React
<div> { this.state.isLoading && <Loading /> } </div>

/* 25. Repeat a string multiple times */
//Longhand ❌
let str = ''; 
for(let i = 0; i < 5; i ++) { 
  str += 'Hello '; 
} 
console.log(str); // Hello Hello Hello Hello Hello
//Shorthand ✅
'Hello '.repeat(5);

/* 26. Exponent power */
//Longhand ❌
const power = Math.pow(4, 3); // 64 
//Shorthand ✅
const power = 4**3; // 64

/* 27. Deep cloning of multi-level object */
//Longhand ❌
let obj = {x: 20, y: {z: 30}}; 
const makeDeepClone = (obj) => { 
  let newObject = {}; 
  Object.keys(obj).map(key => { 
    if(typeof obj[key] === 'object'){ 
      newObject[key] = makeDeepClone(obj[key]); 
    } else { 
      newObject[key] = obj[key]; 
    } 
  }); 
 return newObject; 
} 
const cloneObj = makeDeepClone(obj);
//Shorthand ✅
//doesn’t work if your object property contains function, undefined or NaN as value,
//because when you JSON.stringify the object, the property containing function, undefined or NaN as value gets removed from the object
//so use JSON.parse(JSON.stringify(obj)) when your object contains only strings and numbers
const cloneObj = JSON.parse(JSON.stringify(obj));
//or for single level object
let obj = {x: 20, y: 'hello'};
const cloneObj = {...obj};

/* 28. Get character from string */
let str = 'jscurious.com';
//Longhand ❌
str.charAt(2); // c
//Shorthand ✅
str[2]; // c

/* 29. Flatten nested arrays */
const arr = [1, [2, 3, [4, [5]], 6], 7];
console.log(arr.flat(1)); // [1, 2, 3, [4, [5]], 6, 7]
console.log(arr.flat(2)); // [1, 2, 3, 4, [5], 6, 7]
//if you are not sure about the depth, use flat(Infinity) to flatten the array of any depth:
console.log(arr.flat(Infinity)); // [1, 2, 3, 4, 5, 6, 7]

/* 30. Return a new mutated clone of the value rather than mutating the value directly and returning it */
// ❌
function enrollStudentInCourse(course, student) {
  course.push({ student, enrollmentDate: Date.now() });
}
// ✅
function enrollStudentInCourse(course, student) {
  return [...course, { student, enrollmentDate: Date.now() }];
}

/* 31. use &&= operator */
let a = 1;
let b = 2;
// ❌
if(a) {
  a = b;
}
// ✅
a &&= b; //This logical operator is saying that if the variable a has a truthy value, then variable a should be assigned the value of the variable b
console.log(a) // output for variable 'a' would be 2.

/* 32. use ||= operator */
let a = 1;
let b = 2;
// ❌
if(!a) {
  a = b;
}
// ✅
a ||= b; //This logical operator is saying that if the variable a has a falsy value, then variable a should be assigned the value of the variable b
console.log(a); // output for variable 'a' would be 1.

/* 33. use ??= operator */
let a;
let b = 2;
// ❌
if(a === null || a === undefined) {
  a = 1
}
// ✅
a ??= 1;
console.log(a) // output for variable 'a' would be 1.

/* 34.  String ‘replaceAll’ method */
let str = 'JS is everywhere. JS is amazing!';
// using regex ❌
str.replace(/JS/g, 'JavaScript') //'JavaScript is everywhere. JavaScript is amazing!'
// using replaceAll ✅
str.replaceAll('JS', 'JavaScript') //'JavaScript is everywhere. JavaScript is amazing!'

/* 35. Using underscores as a separator for integers */
let number = 1_000_000_000; // one billion


/* 36.  Convert array to an object */
var fruits = ['banana', 'apple', 'orange'];
var fruitsObj = { ...fruits };
console.log(fruitsObj); // returns {0: “banana”, 1: “apple”, 2: “orange”}

/* 36. Get random value from the array */
var colors = ['blue', 'white', 'green', 'navy', 'pink', 'purple', 'orange', 'yellow'];
var randomColor = colors[(Math.floor(Math.random() * (colors.length)))]

/* 37. reverse an array */
var colors = ['blue', 'white', 'green', 'navy', 'pink', 'purple', 'orange', 'yellow'];
var reversedColors = colors.reverse();
console.log(reversedColors); // returns [“yellow”, “orange”, “purple”, “pink”, “navy”, “green”, “white”, “blue”]

/* 38. Sum all the values in the array */
var nums = [1, 5, 2, 6];
var sum = nums.reduce((prev, curr) => prev + curr);
console.log(sum); // returns 14

/* 39. Skip the brackets */
//We can skip the brackets () when instantiating an object
class D {
  logger() {
    log("D")
  }
}
// Normally, we do this:
(new D()).logger() // D
// Also, we can skip the ():
(new D).logger() // D
//The brackets are optional, even in built-in classes:
(new Date).getDay()

/* 40. Inheritance via __proto__ */
// _proto_ is a way to inherit properties from an object in JavaScript
const obj = {
  method: function() {
    console.log("method in obj")
  }
}
const obj2 = {}
obj2.__proto__ = obj
obj2.method()

/* 41. Get string after last specific character */
'filename.pdf'.split('.').pop() //pdf

/* 42. Get CSS Variable in JS */
getComputedStyle(document.documentElement).getPropertyValue('--my-variable-name')