function* gen() {
  yield;

  yield "aaa";

  //
  yield "bbb";
}

var g = gen();

g.next();

console.log(g.throw(new Error("haha")));

console.log(g.next());

console.log(g.next());
