
// function declaration
function foo() {}

// foo
console.log(foo.name);

// variable declaration
var bar = function () {};

// es5: ''
// es6: bar
console.log(bar.name);

var func1 = function lala() {};

// lala
console.log(func1.name);

var anonymousName = (new Function).name;

// anonymous
console.log(anonymousName);

function oo() {}

var boundName1 = oo.bind({}).name;

// bound oo
console.log(boundName1);

var boundName2 = (function () {}).bind({}).name;

// bound
console.log(boundName2);


