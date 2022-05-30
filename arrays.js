// 1: Clone array
const _arr = [0, 1, 2];
const arr = [..._arr]; // arr => [0, 1, 2]

// 2: Merge array
const arr1 = [0, 1, 2];
const arr2 = [3, 4, 5];
const arr = [...arr1, ...arr2]; // arr => [0, 1, 2, 3, 4, 5];

// 3: Deduplicated array
const arr = [...new Set([0, 1, 1, null, null])]; // arr => [0, 1, null]

// 4: Obfuscated array
const arr = [0, 1, 2, 3, 4, 5].slice().sort(() => Math.random() - 0.5); // arr => [3, 4, 0, 5, 1, 2]

// 5: Empty an array
const arr = [0, 1, 2];
arr.length = 0; // arr => []

// 6: Truncate array
const arr = [0, 1, 2];
arr.length = 2; // arr => [0, 1]

// 7: Exchange assignment
let a = 0;
let b = 1;
[a, b] = [b, a]; // a b => 1 0

// 8: Filter empty values
//Empty values: undefined,null,””,0,false,NaN
const arr = [undefined, null, "", 0, false, NaN, 1, 2].filter(Boolean); // arr => [1, 2]

// 9: Insert member at the beginning of the array
let arr = [1, 2];
arr.unshift(0);
arr = [0].concat(arr);
arr = [0, ...arr];
// arr => [0, 1, 2]

// 10: Insert members at the end of the array
let arr = [0, 1];
arr.push(2);
arr.concat(2);
arr[arr.length] = 2;
arr = [...arr, 2];
// arr => [0, 1, 2]

// 11: Count number of array members
const arr = [0, 1, 1, 2, 2, 2];
const count = arr.reduce((t, v) => {
  t[v] = t[v] ? ++t[v] : 1;
  return t;
}, {});
// count => { 0: 1, 1: 2, 2: 3 }

// 12: Destructuring array member aliases
//We can destructure elements in an array by using the index number of the elements.
const arr = [0, 5, 8];
const { 0: a, 1: b, 2: c } = arr; // a=>0 b=>5 c=>8

// 13: Destructuring nested array members
const arr = [0, 1, [2, 3, [4, 5]]];
const [a, b, [c, d, [e, f]]] = arr; // a b c d e f => 0 1 2 3 4 5

// 14: Destructuring array member default value
const arr = [0, 1, 2];
const [a, b, c = 3, d = 4] = arr; // a b c d => 0 1 2 4

// 15: Get random array member
const arr = [0, 1, 2, 3, 4, 5];
const randomItem = arr[Math.floor(Math.random() * arr.length)]; // randomItem => 1

// 16: Create an array of specified length
const arr = [...new Array(3).keys()]; // arr => [0, 1, 2]

// 17: Creates an array of the specified length and equal values
const arr = new Array(3).fill(0); // arr => [0, 0, 0]

// 18: in operator
//you can use the “in” operator for checking the existence of index of elements in the array
let a = [1, 2, 4, 5, 7, 8];
console.log(2 in a); //true
console.log(8 in a); //false
