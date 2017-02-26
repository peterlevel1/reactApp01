function* fibo() {
  let [prev, cur] = [0, 1];
  while (1) {
    [prev, cur] = [cur, cur + prev];
    yield cur;
  }
}

var obj = fibo();
var i = 0;
for (let ret of obj) {
  if (++i > 10) break;
  console.log(`${i}: ${ret}`);
}

