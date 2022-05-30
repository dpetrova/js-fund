console.error → Shows an error message
console.warn → Shows a warning message
console.info → Shows an informative message (special rendering on Firefox, but technically identical to log method)
console.log → Shows a global message
console.debug → Shows a message to the console with the log level debug
console.table → Shows data of an array/object as a table
console.time (with console.timeEnd) → Allows you to set a timer to see how long a task needs to be completed.

/* Analyse performance of pieces of your code */
console.time()
// your code
console.timeEnd()