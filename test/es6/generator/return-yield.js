function* gen() {
  return yield* a();
}

function* a() {
  yield "a";
  yield "b";
  return "c";
}

var g = gen();

console.log(g.next());
console.log(g.next());
console.log(g.next());
console.log(g.next());
