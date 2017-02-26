var co = require("../cc-co");

co(function *() {
  return yield function* () {
    return yield function (cb) {
      setTimeout(function () {
        cb(null, 200);
      }, 1000);
    }
  }
})
.then(function (res) {
  console.log("then", res);
});

