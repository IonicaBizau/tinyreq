// Dependencies
var TinyReq = require("../lib");

TinyReq("http://example.com/", function (err, body) {
    console.log(err || body);
});
