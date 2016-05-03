const tinyreq = require("../lib");

// Make a request to example.com
tinyreq("http://example.com/", (err, body) => {
    console.log(err || body);
});
