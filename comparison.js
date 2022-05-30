// In “===” it with compare datatype also, of LHS & RHS and whereas “==” only compare values of LHS and RHS
var a = 1;
var b = "1";
console.log(a === b); //false
console.log(a == b); //true

//When comparing two objects, JavaScript compares internal references which are equal only when both operands refer to the same object in memory,
//keys and values are not checked, so the content of the object doesn’t matter, the operands both have to reference the same object to return true in comparison.
var c = { name: "vineet" };
var d = { name: "vineet" };
console.log(c === d); //false
console.log(c == d); //false

/* Nullish coalescing operator */
//The nullish coalescing operator (??) is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined,
//and otherwise returns its left-hand side operand
const foo = null ?? "default string";
console.log(foo); // expected output: "default string"
const baz = 0 ?? 42;
console.log(baz); // expected output: 0
const d = 0 || "default string";
console.log(d); // expected output: "default string"
