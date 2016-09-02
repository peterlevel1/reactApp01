'use strict';
var a = 1;
try {} catch (e) {
  console.log('const can not assigned twice !');
}
try {
  if (typeof b === 'undefined') {}
} catch (e) {
  console.log('declare a variable by let which can not be used before');
}
if (1) {
  var c = 1;
}
try {} catch (e) {
  console.log('c is declared in the curly brace, which can not be seen out of it');
}
{
  var e = 1;
  var f = 2;
}
console.log(e + ' => e can be used out of the curly brace');
try {
  f;
} catch (e) {
  console.log('but f can not be used out of the curly brace');
}
for (var i$__0 = 0; i$__0 < 5; i$__0++) {}
try {
  i;
} catch (e) {
  console.log('i can not be used out of the loop');
}
var arr = [];
for (var i = 0; i < 10; i++) {
  arr[i] = function() {
    console.log(i);
  };
}
arr[6]();
var arr = [];
var $__2 = function(i) {
  arr[i] = function() {
    console.log(i);
  };
};
for (var i$__1 = 0; i$__1 < 10; i$__1++) {
  $__2(i$__1);
}
arr[6]();
try {} catch (e) {
  console.log('wrong declaration by the same variable told twice');
}
try {
  var run1 = function() {
    var x = arguments[0] !== (void 0) ? arguments[0] : 1;
    var y = arguments[1] !== (void 0) ? arguments[1] : x;
    return [x, y];
  };
  console.log(run1());
} catch (e) {
  console.log('wrong: not as expected');
}
