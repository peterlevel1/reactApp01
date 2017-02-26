var co = require("../cc-co");

co(function *() {
  var ret = yield a;
  console.log(ret);

  ret += 100;
  console.log(ret);

  ret = yield* c(ret);
  console.log(ret);

  ret += 100;
  console.log(ret);

  return ret;
})
.then(function (res) {
  console.log("then", res);
});

function a(cb) {
  setTimeout(function () {
    cb(null, 100);
  }, 1000);
}

function* c(ret) {
  return yield new Promise(function (a, b) {
    setTimeout(function () {
      a(ret + 100);
    }, 1000);
  })
}

console.log("promise start");

