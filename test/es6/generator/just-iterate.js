function* nums() {
  yield 1;
  yield 2;
  return 3;
  yield 4;
}

var a = [...nums()];
console.log(a);

var b = Array.from(nums());
console.log(b);

let [c, d] = nums();
console.log(c, d);

for (let ret of nums()) {
  console.log(ret);
}

