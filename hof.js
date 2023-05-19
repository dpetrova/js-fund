// HOF (higher order function) is a function that takes in a function as an argument or returns a function
//e.g: map(), forEach(), reduce(), filter()

let nums = [2, 4, 6, 8, 3, 5];

//map() -> this method iterates over an array and takes in one parameter that represents the element in the current iteration; it return new array
let newnums = nums.map((x, index) => x * 4);
console.log(newnums); // output:[8,16,24,32,12,20]

//forEach()  -> this function also iterates over an array but the difference is that map() returns a new array meanwhile forEach() returns undefined
nums.forEach((x) => x * 4);

//reduce() -> this method takes a callback that takes two parameters, one that represents the element from the last iteration and the other is the current element of the iteration
let sumOfNums = nums.reduce((prev, curr) => prev + curr, 0);
console.log(sumOfNums); // 28

//filter -> use this method to filter out desired elements as per a condition we specify; the method returns a new array
let even_nums = nums.filter((el) => el % 2 == 0);
console.log(even_nums); // [2,4,6,8]

//chaining methods
const x = [...new Array(3)] // [undefined, undefined, undefined]
  .map((x) => x) // [undefined, undefined, udefined]
  .map((x, y) => y) // [0, 1, 2]
  .map((x, y, { length }) => length - x) // [3, 2, 1]
  .reduce((x, y) => x + y, ""); // '321'
