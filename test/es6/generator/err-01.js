function* gen() {
  try {
    yield;
  } catch (err) {
    console.log("inner error: ", err);
  }

  // once a generater throw an error
  // and if this error has been caught
  // the later yield would run
  yield "aaa";

  //
  yield "bbb";
}

var g = gen();

g.next();

console.log(g.throw("haha"));

console.log(g.next());
