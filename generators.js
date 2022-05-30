/* generators */
//They are just normal functions with a little bit strange behavior.
//They can stop their execution in the middle of the function and resume it further from the same point.

/* How do they differ from normal functions?
In a normal JavaScript function, we expect the code inside will execute until we reach a return statement, an error, or the the end of the function.
With a generator function, we are changing that behavior with the yield keyword. 
When we encounter yield in our function we are expressing that we'd like to pause the execution, allowing us to get a value out or into the function.
*/

/* Syntax
They are declared like a normal function plus one * added to it.
The most important thing about generators is the "yield" key word. 
It is called an yield expression, because when we restart the generator, we will send a value back in, and whatever we send it will be the computed result of that expression. 
To iterate on the generator we should use the method .next() over it. 
It actually returns response of type object with two properties: value and done. 
The value property is the yielded-out value, and done is a bolean that indicates if the generator has completed or not.
*/

// a function that is returning the numbers from 1 ot 5:
function* example() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  return 5;
}
const func = example();

console.log(func.next()); // { value:1, done:false }
console.log(func.next()); // { value:2, done:false }
console.log(func.next()); // { value:3, done:false }
console.log(func.next()); // { value:4, done:false }
console.log(func.next()); // { value:5, done:true }

/* What are the advantages?
- Memory Efficient:
Generators are memory efficient, which means that the only values that are generated are those that are needed. 
With normal functions, values should be pre-generated and kept to be used later on.
- Lazy Evaluation:
The evaluation of an expressioning is not calculated until its value is needed. 
If it is not needed, it won’t exist.
- Use Cases:
*/

//Unique ID Generator - you should want everyone to has an unique id so instead of using closure you can do it with generators:
function* idGenerator() {
  let i = 1;
  while (true) {
    yield i++;
  }
}

const ids = idGenerator();

console.log(ids.next().value); // 1
console.log(ids.next().value); // 2
console.log(ids.next().value); // 3

//Using with Promises - The entire structure might look complicated, but if we focus on *main, we can see that we are calling the API and getting result in data as if it was a synchronous call.
const URL = "https://someAPI?name=";

function callAPI(name) {
  const url = `${URL}${name}`;
  return new Promise(function (resolve, reject) {
    $.ajax({
      url,
      success: function (data) {
        resolve(data);
      },
    });
  });
}

function* main() {
  try {
    const data = yield callAPI("Svetli");
    console.log("Data: " + data);
  } catch (err) {
    console.error(err);
  }
}

const it = main();
const res = it.next();
res.value.then((data) => it.next(data));
