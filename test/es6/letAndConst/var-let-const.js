'use strict';


const a = 1;

try {
  // a = 2;
} catch (e) {
  console.log('const can not assigned twice !');
}

try {
  if (typeof b === 'undefined') {

  }
} catch (e) {
  console.log('declare a variable by let which can not be used before');
}


//let b = 1;

if (1) {
  let c = 1;
  //console.log(b + ' => b can be used if declared before the curly brace');
}

try {
  //if (c === 'undefined') {}
} catch (e) {
  console.log('c is declared in the curly brace, which can not be seen out of it');
}

{
  var e = 1;
  let f = 2;
}

console.log(e + ' => e can be used out of the curly brace');

try {
  f;
} catch (e) {
  console.log('but f can not be used out of the curly brace');
}

for (let i = 0; i < 5; i++) {}

try {
  i;
} catch (e) {
  console.log('i can not be used out of the loop');
}

var arr = [];
for (var i = 0; i < 10; i++) {
  arr[i] = function () {
    console.log(i);
  }
}

// 10
arr[6]();

var arr = [];
for (let i = 0; i < 10; i++) {
  arr[i] = function () {
    console.log(i);
  }
}

// 6
arr[6]();



try {
  //var j = 1;
  //let j = 1;
} catch (e) {
    console.log('wrong declaration by the same variable told twice');
}


//try {
//  function run(x = y, y = 1) {
//    return [x, y];
//  }
//
//  console.log(run());
//} catch (e) {
//  console.log('as expected');
//}

try {
  //function run1(x = 1, y = x) {
  //  return [x, y];
  //}

  //console.log(run1());
} catch (e) {
  console.log('wrong: not as expected');
}







