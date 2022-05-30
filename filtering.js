//filtering out duplicates in a Javascript array
const items = [1, 2, 3, 3, 4];
const unique = items.filter(
  (item, position) => items.map((i) => i).indexOf(item) === position
);
console.log(unique);

// remove duplicate elements in an array
const array = [1, 2, 2, 3, 4, 5];
const uniq = [...new Set(array)]; //Set constructor converts an array into a set which cannot have duplicate elements, spread syntax can be used to convert the set object back to an array
console.log(uniq); // [1,2,3,4,5]
