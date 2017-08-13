exports.toQueryString = function (obj, prefix) {

  let str = [];
  for (let p in obj) {

    let k = prefix ? prefix + '[' + p + ']' : p, v = obj[p];
    str.push((typeof v === 'object') ?
      exports.toQueryString(v, k) : (k) + '=' + encodeURIComponent(v));
  }

  return str.join('&');
}
