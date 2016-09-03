
// return object
var arrow1 = x => ({x: 1});

// { x: 1 }
var ret1 = arrow1();

console.log(ret1);

// chain
const pipeline = (...funcs) =>
  val => funcs.reduce((a, b) => b(a), val);

// e.g. 1
const plus1 = a => a + 1;
const mult2 = a => a * 2;
const addThenMult = pipeline(plus1, mult2);

console.log(addThenMult(5));

// chain
// e.g. 2
var arrow4 = x => x++;

var arrow3 = x => val => arrow4(val + x);

var closure1 = arrow3(1);

// 3
console.log(closure1(2));


// reduce test

var num = 1;

// output the final return result by the iterator of the reducer
var sum = [2, 3].reduce(function (memo, v, i) {
  // if (i === 1) { return 10; }
  // ----------------------------
  return memo + v;
}, num);

console.log(num);

console.log(sum);

// this

var returnThis = x =>
  x => this;

var ret2 = returnThis.call({ haha: true })({ haha: false });

// ? => {} not { haha: true }
console.log(ret2);


function tryReturnThis2() {
  return () => {
    return () => {
      return this;
    }
  };
}

// as expected => { haha: true }
var ret3 = tryReturnThis2.call({ haha: true })()();
console.log(ret3);


var returnThisTestGlobal = x =>
  x => this === global;

var ret4 = returnThisTestGlobal()();

// false?
console.log(ret4);

// console.log(global);

// try timer
function timerThis() {
  setTimeout(() => {
    console.log(this);
  }, 0);
}

// { x: 1 }
timerThis.call({x: 1});


// conclusion:
//   arrow funciton should run within normal function declaration
//   for binding `this` object


//! arrow function run with no arguments, bind and apply as given gifts from parser
// ================================================

// arrow function use arguments of the upper func within normal function declaration
function useArguments() {
  setTimeout(() => {
    console.log(arguments);
  }, 0);
}

// { '0': 1, '1': 2, '2': 3 }
useArguments(1, 2, 3);





