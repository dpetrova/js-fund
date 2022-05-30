// .cause property on the error object would allow us to specify which error caused the other error
try {
  doSomeComputationThatThrowAnError();
} catch (error) {
  throw new Error("I am the result of another error", { cause: error });
}
