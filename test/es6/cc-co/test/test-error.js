var co = require("../cc-co");

co(function *() {
  var a;
  try {
    // outer catch the gen.throw
    a = yield function (cb) {
      setTimeout(function () {
        cb(new Error("haha, error is here !"));
      }, 1000);
    }
    console.log("a:", a);
  } catch(err) {
    console.log("outer catch the error", err);
    return 222;
  }

  return 1;
})
.then(function (res) {
  console.log("then", res);
})
.catch(function (err) {
  // TODO no try-catch, error would goes here !
  console.log("catch --- ", err);
});


