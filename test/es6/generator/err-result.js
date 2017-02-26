function* gen() {
  try {
    var ret = yield 1;
    console.log("ret", ret);
    //              wait the 2nd next()
    //              the passed value is an error thrown
    //              so yield would not run
    var ret2 = yield 2;
    console.log("ret2", ret2);
  } catch (err) {
    console.log("inner error: ", err);
  }
}

var g = gen();

console.log(g.next());

console.log(g.next(123));

console.log(g.throw("haha"));

console.log(g.next());
