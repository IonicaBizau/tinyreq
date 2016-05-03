"use strict";

const http = require("http")
    , https = require("https")
    , ul = require("ul")
    , url = require("url")
    , queryString = require("querystring")
    , events = require("events")
    , EventEmitter = events.EventEmitter
    ;

/**
 * tinyreq
 * Creates http(s) requests.
 *
 * @name tinyreq
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
module.exports = function tinyreq (options, callback) {

    // Handle options as string
    if (typeof options === "string") {
        options = {
            url: options
        };
    }

    let parsedurl = url.parse(options.url)
      , defaults = ul.clone(parsedurl)
      , request = null
      , _done = false
      , body = ""
      ;

    // Merge options
    options = ul.deepMerge(options, defaults, {
        method: options.method
              ? options.method
              : options.data
                ? "POST" : "GET"
      , headers: {}
    });

    // Unique callback
    let opt_callback = (err, data, res) => {
        if (_done) { return; }
        _done = true;
        if (typeof callback !== "function")  { return; }
        callback(err, data, res);
    }

    // Handle post data
    if (options.data && options.data.constructor === Object) {
        options.data = queryString.stringify(options.data);
    }

    if (typeof options.data === "string") {
        options.headers["Content-Length"] = Buffer.byteLength(options.data);
    }

    let str = new EventEmitter();

    // Create the request
    request = (options.protocol === "http:" ? http : https).request(options, res => {
        res.setEncoding("utf8");
        body = ""

        if (typeof callback === "function") {
            res.on("data", data => {
                body += data.toString();
            });
        }

        res.on("data", data => {
            str.emit("data", data);
        }).on("error", e => {
            str.emit("error", e);
            opt_callback(e, null, res);
        }).on("end", () => {
            str.emit("end");
            opt_callback(null, body, res);
        });
    }).on("error", e => {
        opt_callback(e, null, null);
    });


    // Handle post data
    if (options.data) {
        request.write(options.data);
    }

    request.end();
    return str;
};
