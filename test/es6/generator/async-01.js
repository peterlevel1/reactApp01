
function* gen() {
  console.log("gen run start");

  var ret = yield ajax();

  console.log("gen result: ", ret);
}

var g = gen();

g.next();

function ajax() {
  setTimeout(() => {
    g.next(100);
  }, 1000);
}

