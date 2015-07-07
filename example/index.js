// Dependencies
var TinyReq = require("../lib");

// Make a request to example.com
TinyReq("http://example.com/", function (err, body) {
    console.log(err || body);
});
