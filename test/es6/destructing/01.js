
'use strict';

let [a, b] = [1, 2];

console.log(a);
console.log(b);

function run1(x = 1, y = x) {
  console.log(x, y);
}

run1();

function* fibs() {
  var a = 0;
  var b = 1;
  while (true) {
    yield a;
    [a, b] = [b, a + b];
  }
}

var [first, second, third, fourth, fifth, sixth] = fibs();
console.log(sixth);

