function* gen() {
  try {
    yield;
  } catch (err) {
    console.log("inner error: ", err);
  }
}

var g = gen();

g.next();

try {
  g.throw("err: 1");

  // generator error would catch by outer try-catch
  g.throw("err: 2");
} catch(err) {
  console.log("outer error: ", err);
}


