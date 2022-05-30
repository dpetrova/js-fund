/* Map */
//The Map object holds key-value pairs and remembers the original insertion order of the keys.
//Any value (both objects and primitive values) may be used as either a key or a value.

const myMap = new Map();

//set
myMap.set("a", 1);
myMap.set("b", 2);
myMap.set("Jessie", { phone: "213-555-1234", address: "123 N 1st Ave" });

//has
myMap.has("Jessie"); //true
myMap.has("Raymond"); //false

//get
console.log(myMap.get("a")); // 1
myMap.set("a", 97);
console.log(myMap.get("a")); //97

//size
console.log(myMap.size); //3

//delete
myMap.delete("b");
console.log(myMap.size); //2

//iterate
for (const [key, value] of myMap) {
  console.log(key + " = " + value);
}
// a = 1
// b = 2
// Jessie = { phone: "213-555-1234", address: "123 N 1st Ave" }

for (const key of myMap.keys()) {
  console.log(key);
}
// a
// b
// Jessie

for (const value of myMap.values()) {
  console.log(value);
}
// 1
// 2
// { phone: "213-555-1234", address: "123 N 1st Ave" }

for (const [key, value] of myMap.entries()) {
  console.log(key + " = " + value);
}
// a = 1
// b = 2
// Jessie = { phone: "213-555-1234", address: "123 N 1st Ave" }

myMap.forEach(function (value, key) {
  console.log(key + " = " + value);
});
// a = 1
// b = 2
// Jessie = { phone: "213-555-1234", address: "123 N 1st Ave" }

//use the keys() or values() iterators, and convert them to an array
Array.from(myMap.keys()); // ["a", "b", "Jessie"]
Array.from(myMap.values()); // [1, 2, { phone: "213-555-1234", address: "123 N 1st Ave" }]

//clone
const original = new Map([[1, "one"]]);
const clone = new Map(original);
console.log(clone.get(1)); // one
console.log(original === clone); // false (useful for shallow comparison)

//merge
const first = new Map([
  [1, "one"],
  [2, "two"],
  [3, "three"],
]);

const second = new Map([
  [1, "uno"],
  [2, "dos"],
]);

// Merge two maps. Spread operator essentially converts a Map to an Array
const merged = new Map([...first, ...second]);
