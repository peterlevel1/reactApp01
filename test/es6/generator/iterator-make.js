function* gen(obj) {
  var propKeys = Reflect.ownKeys(obj);
  console.log(propKeys);
  console.log(Array.isArray(propKeys));
  for (let p of propKeys) {
    yield [p, obj[p]];
  }
}

var obj = { a: "1", b: "2" };

for (let [key, value] of gen(obj)) {
  console.log(key, value);
}

console.log("====================");

function* objectEntries() {
  let propKeys = Object.keys(this);

  for (let propKey of propKeys) {
    yield [propKey, this[propKey]];
  }
}

let jane = { first: 'Jane', last: 'Doe' };

jane[Symbol.iterator] = objectEntries;

for (let [key, value] of jane) {
  console.log(`${key}: ${value}`);
}