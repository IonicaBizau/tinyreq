// Dependencies
var Assert = require("assert")
  , TinyReq = require("../lib")
  ;

// http
it("should support http requests", function (cb) {
    TinyReq("http://example.com/", function (err, body) {
        Assert.equal(err, null);
        Assert.equal(!!/this domain/gi.test(body), true);
        cb();
    });
});

// https
it("should support https requests", function (cb) {
    TinyReq("https://github.com", function (err, body) {
        Assert.equal(err, null);
        Assert.equal(!!/GitHub/gi.test(body), true);
        cb();
    });
});

// Piping
it("should support piping and no callback", function (cb) {

    var str = TinyReq("http://example.com")
      , body = ""
      ;

    str.on("error", function (e) {
        cb(e);
    });

    str.on("data", function (chunk) {
        body += chunk.toString();
    });

    str.on("end", function (chunk) {
        Assert.equal(!!/this domain/gi.test(body), true);
        cb();
    });
});
