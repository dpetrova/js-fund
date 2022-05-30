// 1: Short-circuit operator
const a = d && 1; // Fake operation, judge from left to right, return a false value when encountering a false value, and no longer execute it later, otherwise return the last true value
const b = d || 1; // Take the true operation, judge from left to right, return the true value when encountering the true value, and do not execute it later, otherwise return the last false value
const c = !d; // Returns false if a single expression converts to true, otherwise returns true

// 2: Determine the data type
//Determinable types: undefined, null, string, number, boolean, array, object, symbol, date, regexp, function, asyncfunction, arguments, set, map, weakset, weakmap
function DataType(tgt, type) {
  const dataType = Object.prototype.toString
    .call(tgt)
    .replace(/\[object (\w+)\]/, "$1")
    .toLowerCase();
  return type ? dataType === type : dataType;
}
DataType("test"); // "string"
DataType(20220314); // "number"
DataType(true); // "boolean"
DataType([], "array"); // true
DataType({}, "array"); // false

// 3: Check if array is empty
const arr = [];
const flag = Array.isArray(arr) && !arr.length; //true

// 4: Execute when conditions are met
const flagA = true; // Condition A
const flagB = false; // Condition B
(flagA || flagB) && Func(); // Execute when A or B is satisfied
(flagA || !flagB) && Func(); // Execute when A is satisfied or B is not satisfied
flagA && flagB && Func(); // Execute when both A and B are satisfied
flagA && !flagB && Func(); // Execute when A is satisfied and B is not satisfied

// 5: Executed if non-false
const flag = false; // undefined、null、""、0、false、NaN
!flag && Func();

// 6: Executed when the array is not empty
const arr = [0, 1, 2];
arr.length && Func();

// 7: Executed when the object is not null
const obj = { a: 0, b: 1, c: 2 };
Object.keys(obj).length && Func();
