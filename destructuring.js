/* Destructuring with Aliases */
//The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.
//Rather than sticking with the existing object variable, we can rename them to our own preference.
const object = { number: 10, context: "some" };
const { number } = object; // grabbing number
const { number: otherNumber } = object; // grabbing number and renaming it as otherNumber
console.log(otherNumber); //10
