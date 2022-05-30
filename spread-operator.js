/* Uses of the ES6 Spread Operator */

// 1. Copying an array (the traditional way was to use the Array.prototype.slice() )
let names = ["John", "James", "Ben"];
let newNamesArray = [...names];
console.log(newNamesArray); // ['John','James','Ben']

// 2. Concatenating arrays (the traditional way is by using the Array.prototype.concat() )
let arr1 = ["A", "B", "C"];
let arr2 = ["H", "I", "J"];
let result = [...arr1, ...arr2];
console.log(result); // ['A', 'B', 'C', 'H', 'I', 'J']

// 3. Spreading elements together with an individual element
// ❌
let arr1 = ["a", "b"];
let arr2 = [arr1, "c", "d"];
console.log(arr2); // [ [ 'a', 'b' ], 'c', 'd' ]
// ✅
let arr2 = [...arr1, "c", "d"]; // ['a', 'b', 'c', 'd']

// 4. Spreading elements on function calls
const getNames = (f1, f2, f3) => {
  console.log(`Names: ${f1}, ${f2} and ${f3}`);
};
let names = ["John", "James", "Ben"];
getNames(...names); // Names: John, James and Ben

// 5. Spread syntax for object literals (the traditional way of achieving this was by using the Object.assign() )
const obj1 = { id: 1, name: "John Ludwig" };
const obj2 = { age: 25, country: "BG" };
const employee = { ...obj1, ...obj2 };
console.log(employee); // { id: 1, name: 'John Ludwig', age: 25, country: 'BG' }
