
function a1(x = 1) {
  console.log(x);
}

a1();

a1(2);

function a2([x = 1, y = 2]) {
  console.log(x, y);
}

// 1, 2
a2([]);

// 0, 2
a2([0]);

// 0, 1
a2([0, 1]);

// 1, 2
a2([]);

// 2, 2
a2([2]);

// 2, 3
a2([2, 3]);






