"use strict";

const http = require('follow-redirects').http
    , https = require('follow-redirects').https
    , ul = require("ul")
    , url = require("url")
    , queryString = require("querystring")
    , events = require("events")
    , EventEmitter = events.EventEmitter
    , assured = require("assured")
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
 *  - `encoding` (String): The response encoding type.
 *  - `data_encoding` (String): The request encoding type.
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

    // Merge options
    options = ul.deepMerge(options, ul.clone(url.parse(options.url)), {
        method: options.method
              ? options.method
              : options.data
                ? "POST" : "GET"
      , headers: {}
      , encoding: "utf8"
    });

    let _done = false;

    // Unique callback
    let opt_callback = assured((err, data, res) => {
        if (_done) { return; }
        _done = true;
        if (typeof callback !== "function")  { return; }
        callback(err, data, res);
    });

    // Handle post data
    if (options.data && options.data.constructor === Object) {
        options.data = queryString.stringify(options.data);
    }

    if (typeof options.data === "string") {
        options.headers["Content-Length"] = Buffer.byteLength(options.data);
    }

    let str = new EventEmitter();

    // Create the request
    let request = (options.protocol === "http:" ? http : https).request(options, res => {
        options.encoding && res.setEncoding(options.encoding);
        let body = []
          , bodyLength = 0
          ;

        if (typeof callback === "function") {
            res.on("data", data => {
                body.push(data);
                bodyLength += data.length;
            });
        }

        res.on("data", data => {
            str.emit("data", data);
        }).on("error", e => {
            str.emit("error", e);
            opt_callback(e, null, res);
        }).on("end", () => {
            str.emit("end");
            body = options.encoding === null || options.encoding === "buffer" ? Buffer.concat(body, bodyLength) : body.join("");
            opt_callback(null, body, res);
        });
    }).on("error", e => {
        opt_callback(e, null, null);
    });


    // Handle post data
    if (options.data) {
        request.write(options.data, options.data_encoding);
    }

    request.end();
    str.then = opt_callback._.then.bind(opt_callback._);
    str.catch = opt_callback._.catch.bind(opt_callback._);
    return str;
};
