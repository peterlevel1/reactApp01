var obj = {};

obj[Symbol.iterator] = function* () {
  yield 1;
  yield 2;
}

var ret = [...obj];

console.log(ret);

