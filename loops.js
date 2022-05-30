//1. For Loop -> repeats until a specified condition evaluates false.
for (let i = 0; i < 10; i++) {
  console.log(i);
}
// output will be numbers from 0 to 9

for (let i = 10; i > 0; i--) {
  console.log(i);
}
// output will be numbers from 10 to 1

//2. do..while loop -> repeats until a specified condition evaluates false (always remember, do..while loop will execute at least once)
let count = 0;
do {
  console.log(count);
  count++;
} while (count < 10);
// output will be the numbers 0 to 9

//3. while loop -> executes its statements as long as a specified condition evaluates true
let counter = 0;
while (counter < 10) {
  console.log(counter);
  counter++;
}

//4. For in loop -> iterates a specified variable over all the enumerable properties of an object
let person = { name: "Arc Tutorials", id: 20 };
for (const key in person) {
  console.log(key + "=" + person[key]);
}
// output will be the key value pair of the object

//5. For of loop -> creates a loop Iterating over iterations like arrays, maps etc..
let personArr = ["ARC Tutorials", "YouTube", "Medium"];
for (const value of personArr) {
  console.log(value);
}
// output will be all the values in the array
