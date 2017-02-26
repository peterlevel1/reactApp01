var a = new Promise(function (resolve, reject) {
  resolve(100);
});

a
.then(function (val) {
  console.log(val === 100);
});

console.log("this would exec first");

