function* gen() {
  yield 1;
}

var g = gen();

console.log(gen.constructor);

console.log(gen.constructor.prototype);

console.log(gen.constructor.name);






