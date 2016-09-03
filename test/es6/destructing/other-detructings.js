"use strict";

// strings

var [a, b, c, d, e] = 'hahao';

console.log(a, b, c, d, e);

// 'p1' => {String} 'p1'
// ('p1')[0] = > a1
// ('p1')[1] = > b1
var { 0: a1, 1: b1 } = 'p1';

console.log(a1, b1);

// prototype

var { toString: a2 } = 'aaa';

console.log(a2 === String.prototype.toString);

var { toString: a3 } = 1;

console.log(a3 === Number.prototype.toString);

// what can not be converted to Object is undefined and null
try {
  let { prop: a4 } = null;
} catch (e) {
  console.log('of cause => null.prop is an error! as it is with undefined');
}

// functions
function a5([x, y]) {
  console.log(x, y);
}

a5([1, 2]);

// with defaults
function a6([x = 1, y]) {
  console.log(x, y);
}

// 1, 1
a6([, 1]);

// 2, 1
a6([2, 1]);

// object destructing arguments
function a7({ a, b } = { a: 2, b: 3 }) {
  console.log(a, b);
}

// 10, 10
// a => 2, a => 10
// b => 3, b => 10
a7({ a: 10, b: 10 });


// undefined, 10
// a => 2, a => undefined
// b => 3, b => 10
a7({ b: 10 });

// undefined, undefined
a7({});


// object destructing arguments width defaults value
function a8({ a = 1, b = 1 } = { a: 2, b: 3 }) {
  console.log(a, b);
}

// 10, 10
// a => 2, a => 10
// b => 3, b => 10
a8({ a: 10, b: 10 });


// 1, 10
// a => 2, a => undefined <=> 1
// b => 3, b => 10
a8({ b: 10 });

// 1, 1
// a => 2, a => undefined <=> 1
// b => 3, b => undefined <=> 1
a8({});


// usage

// 1: transfer with variable value

let
  a9 = 1,
  b9 = 2;

[a9, b9] = [b9, a9];

// 2, 1
console.log(a9, b9);

// 2: return values
function a10() {
  return [1, 2, 3];
}

var [a11, b11, c11] = a10();
console.log(a11, b11, c11);

function a12() {
  return {
    a13: 1,
    b13: 2
  };
}

var { a13, b13 } = a12();
console.log(a13, b13);

// 3: function args

// order list
function a14([a, b, c]) {
  console.log(a, b, c);
}

// 10, 20, 30
a14([10, 20, 30]);

// hash list
function a15({x, y, z}) {
  console.log(x, y, z);
}

// 20, 30, 10
a15({ z: 10, x: 20, y: 30 });

// 4: fetch json data

var a16 = {
  aaa: 1,
  bbb: 2,
  ccc: {
    ddd: 1
  }
};

var { aaa, bbb, ccc: { ddd } } = a16;

// 1, 2, 1
console.log(aaa, bbb, ddd);

// 5: defaults function args
function a17({ x= 1, y= 2 }) {
  console.log(x, y);
}

// 1, 2
a17({});


// 6: module data
var { a10: a18, b10: b18, c10: c18 } = require('./modules/obj01.js');

// 1, 2, 3
console.log(a18, b18, c18);





