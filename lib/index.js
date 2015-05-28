// Dependencies
var Http = require("http")
  , Https = require("https")
  , Ul = require("ul")
  , Url = require("url")
  , QueryString = require("querystring")
  , Stream = require("stream")
  , Util = require("util")
  ;

function TinyReqStream() {
    Stream.Writable.call(this);
}
Util.inherits(TinyReqStream, Stream.Writable);
TinyReqStream.prototype._write = function (chunk, encoding, done) {
    done();
};

/**
 * TinyReq
 * Creates http(s) requests.
 *
 * @name TinyReq
 * @function
 * @param {String|Object} options A string being the request url or an object containing the following fields:
 *
 *  - `url` (String): The request url.
 *  - `method` (String): The request method.
 *  - `data` (Object): The request POST data.
 *
 * @param {Function} callback The callback function called (with `error` and `data` parameters).
 * @return {Stream} A stream object which will get response data.
 */
var TinyReq = module.exports = function (options, callback) {

    // Handle options as string
    if (typeof options === "string") {
        options = {
            url: options
        };
    }

    var parsedUrl = Url.parse(options.url)
      , defaults = Ul.clone(parsedUrl)
      , request = null
      , _done = false
      , body = ""
      , str = new TinyReqStream()
      ;

    // Merge options
    options = Ul.merge(options, defaults, {
        method: options.data ? "POST" : "GET"
      , headers: {}
    });

    // Unique callback
    function opt_callback(err, data, res) {
        if (_done) { return; }
        _done = true;
        callback(err, data, res);
    }

    // Handle post data
    if (options.data && options.data.constructor === Object) {
        options.data = QueryString.stringify(options.data);
    }

    if (typeof options.data === "string") {
        options.headers["Content-Length"] = options.data.length;
    }

    // Create the request
    request = (options.protocol === "http:" ? Http : Https).request(options, function(res) {
        res.setEncoding("utf8");
        debugger
        res.pipe(str);
    }).on("error", function (e) {
        opt_callback(e, null, null);
    });

    if (typeof callback === "function") {
        body = ""
        debugger
        str.on("data", function (data) {
        debugger
            body += data.toString();
        }).on("error", function (e) {
        debugger
            opt_callback(e, null, res);
        }).on("end", function () {
        debugger
            opt_callback(null, body, res);
        });
    }

    // Handle post data
    if (options.data) {
        request.write(options.data);
    }

    request.end();
    return str;
};
