var [a, b, c] = [1, 2, 3];

console.log(a, b, c);

let [d, e, f] = [1, 2, 3];

console.log(d, e, f);

// if undefined exists right

let [a1, b1, c1] = [1, , 3];

// should be 1, undefined 3
console.log(a1, b1, c1);

// if undefined exsits left
let [a2] = [1, 2];

// a2 should be 1
console.log(a2);

// if three dots exsits left
let [a3, ...b3] = [1, 2, 3, 4];

// b3 should be [2, 3, 4]
console.log(a3, b3);

// if nested
let [a4, [b4, c4]] = [1, [2, 3]];

// should be 1, 2, 3
console.log(a4, b4, c4);

// type should be [sth] = [sth else]
try {
  let [a5] = 1;
} catch (e) {
  console.log(e.message);
}

// ==============================
// defaults
let [a6 = 1] = [];

// should be 1, not undefined
console.log(a6);

// if assigned with defaults
let [a7 = 1] = [2];

// should be 2, not 1
console.log(a7);

// if assigned with undefined
let [a8 = 1] = [undefined];

// should be 1, not undefined
console.log(a8);

// if assigned with null
let [a9 = 1] = [null];

// should be null, not 1
console.log(a9);

// ==========================
// expressions

function run1() {
  return 1;
}

// if defaults value is one function call
let [a10 = run1()] = [];

// it should be 1
console.log(a10);

// if defaults value is one function call but asigned with not undefined
let [a11 = run1()] = [2];

// it should be 2, as assigned happen before set defaults value for a11
console.log(a11);

// if assigned with other variable
// as 1st arg, a12 must not be assigned with undeclared variable
let [a12 = 1, b12 = a12] = [];

// should be 1, 1
console.log(a12, b12);

// summary:
//   1: find the position of the variables and values accordingly before and after the equals
//   2: let the value on the right of the equal assign to the relative variable if exists
//   3: if assignment failed, variable try to find the defaults value
//        if defaults not exist, it would be undefined
//        if defaults exist, it would be assigned with the defaults
//   4: if assignment done, variable would be assigned with the value


