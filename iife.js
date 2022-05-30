//IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined
//It is a design pattern which is also known as a Self-Executing Anonymous Function.
//Variables defined within the IIFE cannot be accessible by the outside world, preventing polluting of the global scope.
//So the main purpose to use IIFE is to run code quickly and ensure data privacy.
(function hello() {
  console.log("hello");
})();
