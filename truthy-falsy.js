//prevent falsey value from evaluating to false (there are six falsey values in JavaScript: undefined, null, NaN, 0, "" (empty string), and false)
const number = 0;
// ❌
if (number) {
  console.log("The number exists");
} else {
  console.log("The number do not exist");
}

// ✅ giving an exception at the evaluation
if (number === 0 ? true : number) {
  console.log("The number exists");
} else {
  console.log("The number do not exist");
}
