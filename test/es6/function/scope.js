// arg scope

// arg is defined
{

  let x = 1;

  function a(x, y = x) {
    console.log(y);
  }
  // 2
  a(2);

}

// arg is undefined
{

  let x = 1;

  function a1(x, y = x) {
    console.log(y);
  }

  // undefined
  a1();

  // x is undefined in the function scope
  // y would find the x upper
  function a2(y = x) {
    console.log(y);
  }

  // 1
  a2();
}

{
  // if x is not defined
  function a3(y = x) {
    console.log(y);
  }

  try {
    a3();
  } catch (e) {
    console.log(e.message);
  }

}

{
  let foo = 'outer';

  // func scope would find a4 scope
  // but a4 scope is not built already
  // so func scope would find the upper scope
  // => to return the variable: foo
  function a4(func = x => foo) {
    let foo = 'inner';
    console.log(func());
  }

  a4();

  function a5(func = x => bar) {
    let bar = 'inner';
    console.log(func());
  }

  try {
    a5();
  } catch (e) {
    // bar is not defined
    console.log(e.message);
  }
}

{
  var x = 1;

  // what the func y capture is the x in the arguemnts
  // not the func a6 body's variable x
  function a6(x, y = function() { x = 2; }) {
    //console.log('a6 arg: x ' + x);

    var x = 3;
    // what the 'x' func y change is 'x' in the arguments
    // but the x declaration is in the function body
    y();

    console.log(x);
  }

  // 3
  a6();

  function a7(x, y = function() { x = 2; }) {
    // console.log('a7 arg: x ' + x);

    y();

    console.log(x);
  }

  // 2
  a7();
}


// usage

// 1: must not omited

function throwIfMissing() {
  throw new Error('missing arguments');
}

function a8(func = throwIfMissing()) {
  return func;
}

try {
  a8();
} catch (e) {
  console.log(e.message);
}

// rest args
// the role of accumulating the arguments

function a9(...vals) {
  let sum = 0;

  for (var v of vals) {
    sum += v;
  }

  return sum;
}

var retA9 = a9(1, 2, 3);

// 6
console.log(retA9);

// e.g.

// 1: sort


function sort1() {
  return [].slice.call(arguments).sort();
}

var sort2 = (...args) => args.sort();

var arr1 = sort1(2, 5, 1);
// 1, 2, 5
console.log(arr1);

var arr2 = sort2(2, 5, 1);
// 1, 2, 5
console.log(arr2);


// Rest parameter must be last formal parameter
// ===========================================
// function a10(a, ...args, b) {}
// SyntaxError: Rest parameter must be last formal parameter


// items stands for an array
var a11 = (...items) => {
  console.log('iterate the items');

  items.forEach(function (v) {
    console.log(v);
  });
  console.log('===== [iterate done] =====');
};

a11(1, 2, 3);


// test a12 length
function a12(x, y = 2, ...z) {}

console.log('a12 length is: 1 => ' + a12.length);


// ...
// the role as spread operator when calling with function

// 1, 1, 2, 3, 4
console.log(1, ...[1, 2, 3], 4);

// replace the apply

// ES5的写法
var arr10 = [0, 1, 2];
var arr11 = [3, 4, 5];
Array.prototype.push.apply(arr10, arr11);

console.log(arr10);

var arr12 = [0, 1, 2];
var arr13 = [3, 4, 5];

arr12.push(...arr13);

console.log(arr12);

// the role as accumulating with string
var str = 'abc';
var arr20 = [...str];

// [a, b, c]
console.log(arr20);

// the role as accumulating with destructing
let [a20, ...b20] = [1, 2, 3, 4];

// [2, 3, 4];
console.log(b20);

// accumulating with iteratable object
// var nodesDiv = document.getElementsByTagName('div');
// var arr = [...nodesDiv];

var objFakeArray = {
  '0': 1,
  '1': 2,
  'length': 2
};

// but not with this kind of object(objFakeArray)
try {
  var a21 = [...objFakeArray];
} catch (e) {
  // objFakeArray[Symbol.iterator] is not a function
  console.log(e.message);
}

















