var co = require("./co");

co(function* () {
  var ret = yield b;
  console.log("the ret is: ", ret);

  return yield a(ret);
}).then(function (value) {
  console.log("then", value);
}, function (err) {
  console.error(err.stack);
});

function a(ret) {
  return function (cb) {
    setTimeout(function () {
      cb(null, ret + 100);
    }, 1000);
  }
}

function b(cb) {
  setTimeout(function () {
    cb(null, 100);
  }, 1000);
}


