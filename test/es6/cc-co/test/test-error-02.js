var co = require("../cc-co");

co(function *() {
  var a;

  a = yield function (cb) {
    setTimeout(function () {
      // TODO why inner try-catch within co would not take the scope
      cb(new Error("haha, error is here !"));
    }, 1000);
  }
  console.log("a:", a);

  return 1;
})
.then(function (res) {
  console.log("then", res);
})
.catch(function (err) {
  // TODO no try-catch, error would goes here !
  console.log("catch --- ", err);
});