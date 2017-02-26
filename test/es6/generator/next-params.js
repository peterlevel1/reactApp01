
function wrapper(gen) {
  return function (...args) {
    var genObj = gen(...args);
    genObj.next();
    return genObj;
  }
}

var fn = wrapper(function *() {
  console.log(`haha: receive: ${yield}`);
});

fn().next("hello world !");



