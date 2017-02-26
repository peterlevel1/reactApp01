
var pSlice = Array.prototype.slice;

module.exports = co["default"] = co;

/**
 * gen could be generator or a generator function
 */
function co(gen) {
  var args = pSlice.call(arguments, 1);

  return new Promise(function (resolve, reject) {
    if (typeof gen === "function") {
      // gen should receive some args
      gen = gen.apply(null, args);
    }

    // if gen is not the iterater
    if (!gen || typeof gen.next !== "function" ) {
      return resolve(gen);
    }

    onFulfilled();

    function onFulfilled(res) {
      var ret;
      try {
        ret = gen.next(res);
      } catch(err) {
        return reject(err);
      }

      next(ret);
    }

    function onRejected(err) {
      var ret;
      try {
        ret = gen.throw(err);
      } catch (error) {
        return reject(error);
      }

      next(ret);
    }

    function next(ret) {
      if (ret.done) {
        return resolve(ret.value);
      }

      var promise = toPromise(ret.value);
      if (promise && isPromise(promise)) {
        return promise.then(onFulfilled, onRejected);
      }

      return onRejected(errorInfo(ret.value));
    }
  })
}

function errorInfo(value) {
  return new Error("value is not promiseable: "
    + String(ret.value)
  );
}

function toPromise(obj) {
  if (!obj) {
    return obj;
  }

  if (isPromise(obj)) {
    return obj;
  }

  if (isGenerator(obj)) {
    return co(obj);
  }

  if (isGeneratorFunction(obj)) {
    return co(obj);
  }

  // TODO @important:
  // isGeneratorFunction
  // isGenerator
  // should go first before judge function
  if (typeof obj === "function") {
    return fnToPromise(obj);
  }

  if (Array.isArray(obj)) {
    return arrToPromise(obj);
  }

  if (isObject(obj)) {
    return objToPromise(obj);
  }

  return obj;
}

function fnToPromise(fn) {
  return new Promise(function (resolve, reject) {
    fn(function (err, res) {
      if (err) {
        return reject(err);
      }
      if (arguments.length > 2) {
        res = pSlice.call(arguments, 1);
      }
      resolve(res);
    });
  });
}

function arrToPromise(obj) {
  return Promise.all(obj.map(toPromise));
}

function objToPromise(obj) {
  // why: results = new obj.constructor();
  var results = {};
  var keys = Object.keys(obj);
  var promises = [];
  var key;
  var promise;
  for (var i = 0, ii = keys.length; i < ii; i++) {
    key = keys[i];
    promise = toPromise(obj[key]);

    if (promise && isPromise(promise)) {
      defer(promise, key);
    } else {
      results[key] = obj[key];
    }
  }

  return Promise.all(promises).then(function () {
    return results;
  });

  function defer(promise, key) {
    promises.push(promise.then(function (res) {
      results[key] = res;
    }));
  }
}

function isPromise(obj) {
  return typeof obj.then === "function";
}

function isGenerator(obj) {
  return 'function' == typeof obj.next
    && 'function' == typeof obj.throw;
}

function isGeneratorFunction(obj) {
  var constructor = obj.constructor;
  if (!constructor) return false;
  if (constructor.name === "GeneratorFunction") return true;
  return isGenerator(constructor.prototype);
}

function isObject(obj) {
  return obj.constructor == Object;
}

