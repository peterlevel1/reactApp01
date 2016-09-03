
// defaults arg at the 1st
function a1(x = 1, y) {}

// false
console.log(a1.length === 1);

// 0
console.log('a1.length: ' + a1.length);

function a3(x, y = 1) {}

// 1
console.log('a3.length: ' + a3.length);

// defaults arg is at the last
function a4(x, y, z = 1) {}

// 2
console.log('a4.length: ' + a4.length);

// in the middle
function a5(x, y = 1, z) {}

// 1
console.log('a5.length: ' + a5.length);

// with ... operator
function a2(x, ...args) {}

// true
console.log(a2.length === 1);


// conclusion:
//    position arg:
//      length would pick the 1st arg with undefined defaults value as the first pos
//        if none, length would be 0
//      length would pick the last arg with undefined defaults value as the last pos
//        until the undefined or ... operator
