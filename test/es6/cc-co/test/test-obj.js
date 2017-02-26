
// "../../generator/co"
var co = require("../cc-co");

co(function *() {
  return yield {
    x: function (cb) {
      setTimeout(() => {
        console.log(1);
        cb(null, 100);
      }, 1000);
    },
    y: [
      new Promise(function (a, b) {
        setTimeout(() => {
          console.log(2);
          a(200);
        }, 2000);
      }),
      function (cb) {
        setTimeout(() => {
          console.log(3);
          cb(null, 300);
        }, 3000);
      }
    ],
    z: function* () {
      return yield function (cb) {
        setTimeout(() => {
          console.log(4);
          cb(null, 400);
        }, 4000);
      }
    },
    k: (function* () {
      return yield function (cb) {
        setTimeout(() => {
          console.log(5);
          cb(null, 500);
        }, 5000);
      }
    })()
  };
})
.then(function (res) {
  console.log("then", res);
})
.catch(function (res) {
  console.log("catch res: ", res);
});

