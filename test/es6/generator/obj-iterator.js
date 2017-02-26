function* gen() {
  yield 1;
}

// this is an iterator object
var g = gen();

console.log(g);

console.log(g[Symbol.iterator]());
