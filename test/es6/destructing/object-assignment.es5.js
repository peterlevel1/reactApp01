var $__7,
    $__8,
    $__11,
    $__13,
    $__15,
    $__17,
    $__20,
    $__21,
    $__22,
    $__23;
var $__2 = {
  a: 1,
  b: 1
},
    a = $__2.a,
    b = $__2.b;
console.log(a, b);
var $__3 = {
  a1: 1,
  c1: 2
},
    a1 = $__3.a1,
    b1 = $__3.b1;
console.log(a1, b1);
var b2 = {a2: 1}.a2;
console.log(b2);
try {
  console.log(a2);
} catch (e) {
  console.log('a2 is undefined, should not be used as variable');
}
var obj1 = {a3: ['aaa', {b3: 'bbb'}]};
var $__6 = obj1.a3,
    a3 = ($__7 = $__6[Symbol.iterator](), ($__8 = $__7.next()).done ? void 0 : $__8.value),
    b3 = (($__8 = $__7.next()).done ? void 0 : $__8.value).b3;
console.log(a3, b3);
var $__10 = {},
    a4 = ($__11 = $__10.a4) === void 0 ? 1 : $__11;
console.log(a4);
var $__12 = {a5: 2},
    a5 = ($__13 = $__12.a5) === void 0 ? 1 : $__13;
console.log(a5);
var $__14 = {a6: 2},
    a6 = ($__15 = $__14.a6) === void 0 ? 1 : $__15;
console.log(a6);
var $__16 = {},
    a7 = ($__17 = $__16.a7) === void 0 ? 1 : $__17;
console.log(a7);
try {
  var b8 = {foo: 'baz'}.a8.b8;
} catch (e) {
  console.log('it should be failed to find obj.a8.b8');
}
var a9;
(($__20 = {a9: 1}, a9 = $__20.a9, $__20));
console.log(a9);
(($__21 = [true, false], $__21));
(($__22 = 'abc', $__22));
(($__23 = [], $__23));
var obj01 = require('./modules/obj01.js');
var $__24 = obj01,
    a10 = $__24.a10,
    b10 = $__24.b10,
    c10 = $__24.c10;
console.log(a10, b10, c10);
var arr = [1, 2, 3];
var $__25 = arr,
    a11 = $__25[0],
    b11 = $__25[arr.length - 1];
console.log(a11, b11);
