const tinyreq = require("../lib");

// Make a request to example.com
tinyreq("http://example.com/", (err, body) => {
    console.log(err || body);
});

// Make a request with custom headers
tinyreq({
    url: "http://example.com/"
  , headers: {
        "user-agent": "Crawler/1.0"
    }
}, (err, body) => {
    console.log(err || body);
});
