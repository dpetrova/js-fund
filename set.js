/* Set */
//The Set object lets you store unique values of any type, whether primitive values or object references.

const mySet = new Set();

//add
mySet.add(1); // Set [ 1 ]
mySet.add(5); // Set [ 1, 5 ]
mySet.add(5); // Set [ 1, 5 ]
mySet.add("some text"); // Set [ 1, 5, 'some text' ]
const o = { a: 1, b: 2 };
mySet.add(o);
mySet.add({ a: 1, b: 2 }); // o is referencing a different object, so this is okay

//has
mySet.has(1); // true
mySet.has(3); // false
mySet.has(5); // true
mySet.has("Some Text".toLowerCase()); // true
mySet.has(o); // true

//size
mySet.size; // 5

//delete
mySet.delete(5); // removes 5 from the set

//iterate
for (let item of mySet) console.log(item); //1, "some text", {"a": 1, "b": 2}, {"a": 1, "b": 2}
for (let item of mySet.keys()) console.log(item); // 1, "some text", {"a": 1, "b": 2}, {"a": 1, "b": 2}
for (let item of mySet.values()) console.log(item); //1, "some text", {"a": 1, "b": 2}, {"a": 1, "b": 2}
// (key and value are the same here)
for (let [key, value] of mySet.entries()) console.log(`${key} -> ${value} `); //1 -> 1, "some text" -> "some text", {"a": 1, "b": 2} -> {"a": 1, "b": 2}, {"a": 1, "b": 2} -> {"a": 1, "b": 2}
// convert Set object to an Array object, with Array.from
const myArr = Array.from(mySet); // [1, "some text", {"a": 1, "b": 2}, {"a": 1, "b": 2}]
