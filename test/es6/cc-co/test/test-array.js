var co = require("../cc-co");

co(function *() {
  var ret = yield [
    Promise.resolve(1),
    Promise.resolve(2),
  ];
  console.log(ret);
  return ret;
})
.then(function (res) {
  console.log("then", res);
});

