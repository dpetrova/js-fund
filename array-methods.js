//const declaration creates a read-only reference to a value. It does not mean the value it holds is immutable, just that the variable identifier cannot be reassigned
const a = [1, 2, 3, 4];
a.push(5); //[1,2,3,4,5]
a.length = 0; //[]

// at() -> with positive number will work the same as indexing by [], but with negative will allow accessing values from the end
const arr = [1, 2, 3, 4];
arr.at(-2); // 3
const str = "1234";
str.at(-2); // '3'

// slice(start,end) -> does not change the original array
let array = [0, 1, 2, 3, 4, 5, 6, 7];
let arr1 = array.slice(2); // remove first 2 elements -> [2, 3, 4, 5, 6, 7]
let arr2 = array.slice(-2); // return last 2 elements -> [6,7]
let arr3 = array.slice(2, 5); // [2, 3, 4]
console.log(array); //[0, 1, 2, 3, 4, 5, 6, 7]

// splice(start, deleteCount, n1, n2, n3,...) -> changes the original array
let A = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let B = A.splice(2, 3);
console.log(A); //[1,2,6,7,8,9,10]
console.log(B); // [3,4,5]
let C = A.splice(0, 2, 10, 11, 12, 13, 14);
console.log(C); //[1,2]
console.log(A); //[10,11,12,13,14,6,7,8,9,10]

//forEach() -> is generally used when you need not return something during iteration
let A = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let C = A.forEach((item) => item % 2 == 0);
console.log(C); //undefined

//map() -> is used when you want to return something during iteration
let A = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let B = A.map((item) => item % 2 == 0);
console.log(B); //[ false, true, false, true, false, true, false, true, false, true ]
