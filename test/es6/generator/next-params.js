
function wrapper(gen) {
  return function (...args) {
    var genObj = gen(...args);
    genObj.next();
    return genObj();
  }
}