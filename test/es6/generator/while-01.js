var clock = function*() {
  while (true) {
    yield console.log('Tick!');
    yield console.log('Tock!');
  }
};

var clocked = clock();

clocked.next();
clocked.next();
clocked.next();
clocked.next();
clocked.next();
clocked.next();
