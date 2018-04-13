import Utils from './utils';

function HttpClient(args) {

  const options = Object.assign({
    basePath: '',
    timeout: 120000,
    withCredentials: true
  }, args || {});

  this.request = function (method, uri, content) {

    return new Promise((resolve, reject) => {

      let req = new XMLHttpRequest();
      req.onreadystatechange = function () {

        if (req.readyState === 4) {

          if (req.status >= 200 && req.status < 300) {

            try {

              req.result = JSON.parse(req.responseText);
              resolve(req);
            } catch (e) {

              resolve(req);
            }
          } else {

            reject(req);
          }
        }
      };

      let fullUri = options.basePath + uri;

      req.open(method, fullUri, true);
      req.uri = fullUri;
      req.timeout = options.timeout;
      req.withCredentials = options.withCredentials;
      req.setRequestHeader('Accept', 'application/json');
      req.setRequestHeader('Content-Type', 'application/json');
      req.send(content);
    });
  };

  // https://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html

  this.get = function (uri, content) {

    if (content) {

      let query = Utils.toQueryString(content);
      if (query) {

        uri = uri + '?' + query;
      }
    }

    return this.request('GET', uri, null);
  };

  this.put = function (uri, content) {

    return this.request('PUT', uri, content ? JSON.stringify(content) : '');
  };

  this.patch = function (uri, content) {

    return this.request('PATCH', uri, content ? JSON.stringify(content) : '');
  }

  this.post = function (uri, content) {

    return this.request('POST', uri, content ? JSON.stringify(content) : '');
  };

  this.delete = function (uri, content) {

    return this.request('DELETE', uri, content ? JSON.stringify(content) : '');
  }
}

export default HttpClient;
