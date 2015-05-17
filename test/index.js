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
