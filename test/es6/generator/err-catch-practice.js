function* gen() {
  var a = yield console.log("hello");
  console.log("a is ", a);
  var b = yield a.toUpperCase();

  // as the result of b trigger error
  // and not catch by inner try catch
  // so this step would not to be exec
  yield 3123;
}

var g = gen();

g.next();

try {
  g.next(100);
} catch (err) {
  console.log(err);
}

console.log(g.next());

