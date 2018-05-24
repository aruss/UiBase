function toQueryString(obj, prefix) {

  let str = [];
  for (let p in obj) {

    let k = prefix ? prefix + '[' + p + ']' : p;
    let v = obj[p];

    str.push((typeof v === 'object') ?
      toQueryString(v, k) :
      (k) + '=' + encodeURIComponent(v)
    );
  }

  return str.join('&');
}

// Borrowed from https://github.com/hapijs/hoek/blob/master/lib/index.js
function assert(condition, ...args) {

  if (!condition) {

    throw new Error(args ? args.join(' ') : 'Assertion failed');
  }
}

// Borrowed from https://github.com/hapijs/hoek/blob/master/lib/index.js
function shallow(source) {

  const target = {};
  const keys = Object.keys(source);

  for (let i = 0; i < keys.length; ++i) {

    const key = keys[i];
    target[key] = source[key];
  }

  return target;
}

function createId(source) {

  return source
    .replace(/[^a-zA-Z0-9]/g, '_')
    .replace(/__+/g, '_')
    .replace(/_+$/, '')
    .toLowerCase();
}

function isObject(source) {

  return isType(source, 'object');
}

function isUndefined(source, typeName) {

  return isType(source, 'undefined');
}

function isType(source, typeName) {

  return typeof source === typeName;
}

function debounce(func, wait, immediate) {
  var timeout;
  return function () {
    var context = this,
      args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

function addBodyClass(className, assertion) {

  if (assertion) {
    $("body").addClass(className);
  } else {
    $("body").removeClass(className);
  }
}

export default {
  toQueryString,
  assert,
  shallow,
  createId,
  isObject,
  isUndefined,
  debounce,
  addBodyClass
};
