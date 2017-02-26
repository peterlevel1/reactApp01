// yield nested

function* a(x) {
  var ret1 = yield x + 1;
  yield* b(ret1);
}

function* b(x) {
  yield x * 5;
}

var result = a(5);

console.log(result.next()); // 6
console.log(result.next(10)); // 50
console.log(result.next()); // undefined
