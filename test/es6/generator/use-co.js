var co = require("./co");

co(function* () {
  return yield a;
}).then(function (value) {
  console.log("then", value);
}, function (err) {
  console.error(err.stack);
});

function a(cb) {
  setTimeout(function () {
    cb(null, 100);
  }, 1000);
}

