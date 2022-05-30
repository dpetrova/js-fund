/* Coding Better Composables */

/* 1. What is a Composable? */
//A composable is “a function that leverages Vue Composition API to encapsulate and reuse stateful logic”.
//This means that any code that uses reactivity can be turned into a composable.
//Here is an example of useMouse composables that grab the mouse coordinates:

// @composables/useMouse.js
import { ref, onMounted, onUnmounted } from "vue";

export function useMouse() {
  const x = ref(0);
  const y = ref(0);

  function update(event) {
    x.value = event.pageX;
    y.value = event.pageY;
  }

  onMounted(() => window.addEventListener("mousemove", update));
  onUnmounted(() => window.removeEventListener("mousemove", update));

  return { x, y };
}

//use this composable inside of a component:
<template>
  X: {{ x }} Y: {{ y }}
</template>

<script setup>
  import { useMouse } from '@composables/useMouse';
  const { x, y } = useMouse();
</script>


/* 2. Use an options object parameter to make your composables more configurable */
//Most composables have one or maybe two required inputs. 
//Then there’s a series of optional arguments to help configure how the composable works.
//When configuring your composable, instead of passing in a long list of arguments, you can pass in an options object instead.
//Passing in options as a whole object instead of arguments gives us a few benefits:
// - we don’t have to remember the correct ordering of arguments
// - the code is more readable because we know what the option does
// - it’s much easier to add new options later on
const title = useTitle('A new title', '>> %s <<'); //using more arguments
const title = useTitle('A new title', { titleTemplate: '>> %s <<', observe: true }); //using an options object

//Here’s how you would implement the options object pattern in a composable:
export function useTitle(newTitle, options) {
  //destructure the options object, and clearly provide defaults for each possible option
  const {
    document = defaultDocument,
    observe = false,
    titleTemplate = '%s',
  } = options;    
    // ...
}


/* 3. Use ref and unref for more flexible parameters */
//Almost all composables require some type of argument as an input. 
//This can be a reactive ref, or a primitive Javascript type, like a string, number, or object. 
//Instead of requiring either a ref or a primitive, we can accept either. 
//We then convert the argument to whatever we need on the fly.
//To make the flexible arguments pattern work, we need to use either the ref function or the unref function on the argument we get:
const myRef = ref(0); // create a new ref
assert(myRef === ref(myRef)); // get the same ref back
const value = unref(myRef); // unwrap to get the inner value
assert(value === unref(value)); // returns the same primitive value

// When we need to use a ref in the composable
export default useMyComposable(input) {
  const ref = ref(input);
}
  
// When we need to use a raw value in the composable
export default useMyComposable(input) {
  const rawValue = unref(input);
}


/* 4. The Pattern of Dynamic Return Values */
//A composable can either return a single value, or an object of values.
//You can also dynamically switch between the two. 
//For example, return a single value when that’s all you need, or return a whole object when you need more control and granularity.
const counter = useInterval(1000); // returns a single value
const { counter, pause, resume } = useInterval(1000, { controls: true }); // returns an object of values

//To implement this pattern, we need to do two things:
// - 1. add an option in our options object that turns it on
// - 2. use that option to change the behavior of our return statement
export default useComposable(input, options) {
  // 1. Add in the `controls` option
  const { controls = false } = options;   
  // ... 

  // 2. Either return a single value or an object
  if (controls) {
    return { singleValue, anotherValue, andAnother };
  } else {
    return singleValue;
  }
}


/* 5. Start with the Interface */
//We have to answer a few questions through this process:
// - What arguments do we pass into our composable? A ref, a raw value, or a series of values?
// - What options should be included in the options object?
// - What values does our composable return? Is it just a single value, or do we want to use the dynamic return value pattern?


/* 6. Async Without Await pattern */
//Writing async behavior with the composition API can be tricky at times. 
//All asynchronous code must be at the end of your setup function after any reactive code. 
//If you don’t do this, it can interfere with your reactivity.
//The setup function will return when it runs into an await statement. 
//Once it returns, the component is mounted, and the application continues executing as usual. 
//Any reactivity defined after the await, whether it’s a computed prop, a watcher, or something else, won’t have been initialized yet.
//This means that a computed property defined after an await won’t be available to the template at first. 
//Instead, it will only exist once that async code is finished and the setup function completes execution.

// Implementing the Async Without Await Pattern
export default useMyAsyncComposable(promise) {
  const state = ref(null);

  const execute = async () => {
    // 2. Waiting for the promise to finish
    state.value = await promise

    // 5. Sometime later...
    // Promise has finished, `state` is updated reactively,
    // and we finish this method
  }

  // 1. Run the `execute` method
  execute();
  // 3. The `await` returns control to this point 

  // 4. Return state and continue with the `setup` function
  return state;
}

//The promise is executed “in the background,” and because we aren’t waiting for it, it doesn’t interrupt the flow in the setup function. 
//We can place this composable anywhere without interfering with reactivity.