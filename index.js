function receivesAFunction(callback) {
  return callback();
}

function returnsANamedFunction() {
  return namedFunction;
}

function returnsAnAnonymousFunction() {
  return () => console.log("This is an anonymous function!");
}

function namedFunction() {
  return console.log("Hello, World!");
}