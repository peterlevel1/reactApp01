function* gen() {
  yield 1;
  try {
    yield 2;
    yield 3;
  } finally {
    yield 4;
    yield 5;
  }
  yield 6;
}

var g = gen();

// 1
console.log(g.next());

// 2
console.log(g.next());

// 4: finally: 1st yield
console.log(g.return("lala"));

// 5: finally: 2nd yield
console.log(g.next());

// lala: after finally, final yield the result
console.log(g.next());

// void 0
console.log(g.next());

// void 0
console.log(g.next());

