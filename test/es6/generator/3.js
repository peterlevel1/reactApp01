// yield nested + loop

function* a(x) {
  var ret1 = yield x + 1;
  yield* b();
}

function* b() {
  for (var i = 0; i < 3; i++) {
    yield i;
  }
}

var result = a(5);

console.log(result.next()); // 6
console.log(result.next()); // 0
console.log(result.next()); // 1
console.log(result.next()); // 2
console.log(result.next()); // void 0
