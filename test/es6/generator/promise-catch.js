var a = new Promise(function (resolve, reject) {
  setTimeout(function () {
    reject(new Error("lala"));
  }, 1000);
});

a.catch(function (err) {
  console.log(err);
  return 100;
})
.then(function (val) {
  console.log(val === 100);
});

