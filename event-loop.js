/* What is javaScript? */
//JavaScript is a single-threaded programming language,
//which means that a JavaScript script is only capable of executing commands, or lines of code, in a single, sequential fashion; one after another.
//We cannot have two truly simultaneous processes executing at the same time.
//JavaScript is an Interpreted language which means the code runs from top to bottom and the result of the code is immediately returned.

/* What is a single threaded programming language? */
//I.e JavaScript can run only one piece of code at a time.
//This also means that JavaScript has one Call Stack.

/* What is Call Stack? */
//Call Stack is a data structure which records where are we in the program.
//If we invoke a function, we put that on stack.
//when a function returns a value, it gets popped off the top of the stack.

/* What makes our website slow? */
//When things which are slow are on the stack, it slows down the website.
//This is called Blocking.
//For example, network requests, image processing are something which causes blocking.
//Since, JavaScript is a single threaded programming language, this means that we have to wait till the request is completed.
//Here comes *WebAPIs* to rescue.

/* What is WebAPI? */
//WebAPIs are some features that is provided by the browser and not the JavaScript engine.
//It includes setTimeout, DOM API, HTTP requests and so on.
//This helps in creating non-blocking, responsive behaviour.

/* What is an event loop? */
//First, we have to understand what happens when a code run.
//These single-threaded processes occur on JavaScript’s Event Loop.
//The Event Loop contains all of these single-threaded processed lined up in the order they are coded, and these processes are executed accordingly.
//This collective behaviour characterized as ‘Synchronous’ behaviour.

/* Task Queue */
//Whenever a function is called it first goes in the Call Stack and it stays there until it returns something,
//If a function returns a setTimeout function then it is handled by WebAPI without blocking the main thread.
//The callback function that is in the setTimeout runs as long as for the time we passed in the second arguement.
//Once it is completed, It does not goes in back in the Call Stack rather it goes in something we call Task Queue.
//Event loop check whether the Call Stack is empty, if yes, then the callback is added to the Call Stack gets invoked and returns a value and get popped off.

/* Promises */
//Promises are not synchronous. but instead are classed as ‘Asynchronous’ events.
//When our Event Loop execution encounters a promise, the asynchronous behaviour/method/function is detached from our synchronous Event Loop and it sits in a waiting queue,
//for the promise to be resolved & fulfilled.
//The caveat to this functionality, is that we need to provide some additional instruction to our code on how to behave in the presence of asynchronicity.
