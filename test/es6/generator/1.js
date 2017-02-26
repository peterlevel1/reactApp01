function *gen1() {
  yield 1;
  yield 2;
  return 3;
}

var a = gen1();

console.log(a.next());
console.log(a.next());
console.log(a.next());
console.log(a.next());
