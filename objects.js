// 1: Computed property names
const key1 = "name";
const key2 = "age";
const student = {
  [key1]: "john Doe",
  [key2]: 26,
};
console.log(student); //{ name:"john Doe", age:26 }

// 2: Clone object
const _obj = { a: 0, b: 1, c: 2 };
const obj = { ..._obj }; //shallow copy
//deep copy -> use lodash library
const obj = JSON.parse(JSON.stringify(_obj)); // obj => { a: 0, b: 1, c: 2 }

// 3: Merge objects
const obj1 = { a: 0, b: 1, c: 2 };
const obj2 = { c: 3, d: 4, e: 5 };
const obj = { ...obj1, ...obj2 }; // obj => { a: 0, b: 1, c: 3, d: 4, e: 5 }

// 4: Object Variable Properties
const flag = false;
const obj = {
  a: 0,
  b: 1,
  [flag ? "c" : "d"]: 2,
};
// obj => { a: 0, b: 1, d: 2 }

// 5: Create a pure empty object
const obj = Object.create(null);
Object.prototype.a = 0;
// obj => {}

// 6: Delete object useless properties
const obj = { a: 0, b: 1, c: 2 };
const { a, ...rest } = obj;
// rest => { b: 1, c: 2 }

// 7: Destructuring object property nesting
const obj = { a: 0, b: 1, c: { d: 2, e: 3 } };
const {
  c: { d, e },
} = obj;
// d e => 2 3

// 8: Destructuring object property aliases
const obj = { a: 0, b: 1, c: 2 };
const { a, b: d, c: e } = obj;
// a d e => 0 1 2

// 9: Destructuring object property default values
const obj = { a: 0, b: 1, c: 2 };
const { a, b = 2, d = 3 } = obj;
// a b d => 0 1 3

// 10: Getters & Setters
//In Javascript we can use javascript getter and setter methods to validate properties.
let A = {
  subjectName: "Math",
  set marks(value) {
    if (isNaN(value)) throw Error("Marks must be number");
    else this._marks = value; //for property name you have to use _(underscore) before its name
  },
  get result() {
    if (this._marks >= 33) return "Pass";
    else return "Fail";
  },
};
A.marks = 59;
console.log(A.result); // Pass
A.marks = "sa"; // throw Error
