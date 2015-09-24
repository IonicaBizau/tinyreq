// Dependencies
var Http = require("http")
  , Https = require("https")
  , Ul = require("ul")
  , Url = require("url")
  , QueryString = require("querystring")
  , Events = require("events")
  , EventEmitter = Events.EventEmitter
  ;

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
 * @return {EventEmitter} An event emitter you can use for listening for the `data`, `error` and `end` events.
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
      ;

    // Merge options
    options = Ul.deepMerge(options, defaults, {
        method: options.data ? "POST" : "GET"
      , headers: {}
    });

    // Unique callback
    function opt_callback(err, data, res) {
        if (_done) { return; }
        _done = true;
        if (typeof callback !== "function")  { return; }
        callback(err, data, res);
    }

    // Handle post data
    if (options.data && options.data.constructor === Object) {
        options.data = QueryString.stringify(options.data);
    }

    if (typeof options.data === "string") {
        options.headers["Content-Length"] = Buffer.byteLength(options.data);
    }

    var str = new EventEmitter();

    // Create the request
    request = (options.protocol === "http:" ? Http : Https).request(options, function (res) {
        res.setEncoding("utf8");
        body = ""

        if (typeof callback === "function") {
            res.on("data", function (data) {
                body += data.toString();
            });
        }

        res.on("data", function (data) {
            str.emit("data", data);
        }).on("error", function (e) {
            str.emit("error", e);
            opt_callback(e, null, res);
        }).on("end", function () {
            str.emit("end");
            opt_callback(null, body, res);
        });
    }).on("error", function (e) {
        opt_callback(e, null, null);
    });


    // Handle post data
    if (options.data) {
        request.write(options.data);
    }

    request.end();
    return str;
};
