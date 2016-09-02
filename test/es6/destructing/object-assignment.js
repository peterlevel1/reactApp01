
// variable same name with object properties
let { a, b } = { a: 1, b: 1 };
console.log(a, b);

var { a1, b1 } = { a1: 1, c1: 2 };

// it should be 1, undefined
console.log(a1, b1);

// if I want to get the value with diffrent name, I can do this

var { a2: b2} = { a2: 1 };

// it should be 1
console.log(b2);

// what about a2 ?
try {
  console.log(a2);
} catch (e) {
  console.log('a2 is undefined, should not be used as variable');
}

// so it should be like this
// var { ***(a2: b2)*** } = { ***(a2: 1)*** };
// what objectAssignment different from arrayAssignment is
// objectAssignment is convenience for the parser to find the position by hash table

// test object assignment with array assignment

var obj1 = {
  a3: [
    'aaa',
    { b3: 'bbb' }
  ]
};

// a3: let the parser know where the value should be sent to the variable
// [a3, {b3}]: construct the same type with the value style
var { a3: [a3, {b3}] } = obj1;

// it should be aaa, bbb
console.log(a3, b3);

// defaults

var { a4 = 1 } = {};

// it should 1
console.log(a4);

var { a5 = 1 } = { a5: 2 };

// it should be 2
console.log(a5);

var { a6: a6 = 1 } = { a6: 2 };

// it should be 2
console.log(a6);

var { a7: a7 = 1 } = {};

// it should be 1
console.log(a7);


// error for construct structure

try {
  var { a8: {b8} } = { foo: 'baz' }; // obj
} catch (e) {
  // obj.a8 => undefined
  // obj.a8.b8 => undefined.b8
  console.log('it should be failed to find obj.a8.b8');
}


// special attention:
// destructing only used with let, var, const
// or should be around with () as a sentence, for it would be trigger parsing by parser
// the error would not be caught, as it is a syntax error
// => code block should not be treated as one assignment;
var a9;

({ a9 } = { a9: 1 });

console.log(a9);

// empty assignments is ok, as it would not affect any variable
({} = [true, false]);
({} = 'abc');
({} = []);

// test for obj destructing with an module
var obj01 = require('./modules/obj01.js');

var { a10, b10, c10 } = obj01;

console.log(a10, b10, c10);


// test for arrays

var arr = [1, 2, 3];

// dynamic key, es5 can not do this
var { 0: a11, [arr.length - 1]: b11 } = arr;

console.log(a11, b11);

// =========