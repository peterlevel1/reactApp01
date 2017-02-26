function* gen() {
  yield* [1, 2, 3]
}

var g = gen();

var arr = [...g];

console.log(arr);

function* gen2() {
  yield* "abcd";
}

var g2 = gen2();

var arr2 = [...g2];

console.log(arr2);

function* gen3() {
  yield* gen4();
}

var g3 = gen3();

var arr3 = [...g3];

console.log(arr3);

function* gen4() {
  yield* ["haha", "hello", "world !"];
}

