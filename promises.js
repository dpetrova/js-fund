/* Handle Promises */
//If we use the standard async/await syntax to resolve both these promises, our code is forced to a halt, until each promise of information is resolved in a sequential order;
//we resolve them in series (total ~2 sec).
const friends = await getFriends(); //~1 sec
const enemies = await getEnemies(); //~1 sec

//This could be acceptable if we were only making one or two fetch requests, or if one promise depends on the result of another.
//However as soon as we have thousands of calls, we may need to be smarter with our promise handling
//The Promise.all() method sends out both asynchronous requests, one directly after the other, without having to wait for a response from either before sending the next call;
//in essence, the asynchronous calls are made in parallel (total ~1 sec).
const promise1 = getFriends();
const promise2 = getEnemies();
const [friends, anemies] = await Promise.all([promise1, promise2]); //~1 sec
//The rest of our synchronous code is still forced to await for both promises to resolve

//What if one promise fails to respond?
//Unfortunately our Promise.all() behaviour isn’t very understanding it falters with it’s error handling capabilities.
//Fortunately, it’s genetically superior cousin, Promise.allSettled(), can help us out.
//Promise.allSettled() returns each resolved promise as an object, as opposed to just the returned value itself.
//The object still contains the returned value, but it also contains a response status which would vary between ‘fulfilled’ or ‘rejected’.
const promise1 = getFriends();
const promise2 = getEnemies();
const responses = await Promise.allSettled([promise1, promise2]); //~1 sec
console.log(responses);
// [
//   {status: 'fulfield', value: ['James', 'Dick']},
//   {status: 'rejected', reason: 'No one likes yot'}
// ]

/* Handle async/await gracefully */
async function errorCaptured(asyncFunc) {
  try {
    let res = await asyncFunc();
    return [null, res];
  } catch (error) {
    return [error, null];
  }
}

let [err, res] = errorCaptured(asyncFunc);

/* Promise.any() */
//Promise.any() takes several iterable promises and returns the promise that is fulfilled first
const p1 = new Promise((resolve) => setTimeout(resolve, 500, "First"));
const p2 = new Promise((resolve) => setTimeout(resolve, 800, "Second"));
const p3 = Promsie.reject(1);
const promises = [p1, p2, p3];
Promise.any(promises)
  .then((result) => {
    console.log(result); // the result is 'First' because that's the promise, that is fulfilled first
  })
  .catch((e) => {
    console.log(e);
  });
