// Dependencies
const Assert = require("assert")
    , TinyReq = require("../lib")

// http
it("should support http requests", cb => {
    TinyReq("http://example.com/", (err, body) => {
        Assert.equal(err, null)
        Assert.equal(!!/this domain/gi.test(body), true)
        cb()
    })
})

// http
it("should support promises", cb => {
    TinyReq("http://example.com/").then(body => {
        Assert.equal(!!/this domain/gi.test(body), true)
        cb()
    }).catch(err => {
        cb(err)
    })
})

// https
it("should support https requests", cb => {
    TinyReq("https://example.com", (err, body) => {
        Assert.equal(err, null)
        Assert.equal(!!/this domain/gi.test(body), true)
        cb()
    })
})

// https
it("should support gzipped results", cb => {
    TinyReq("http://htmlcolorcodes.com/color-chart/flat-design-color-chart/", (err, body) => {
        Assert.equal(err, null)
        Assert.equal(!!/flat design/gi.test(body), true)
        cb()
    })
})

// Piping
it("should support piping and no callback", cb => {

    let str = TinyReq("http://example.com")
      , body = ""


    str.on("error", e => {
        cb(e)
    })

    str.on("data", chunk => {
        body += chunk.toString()
    })

    str.on("end", chunk => {
        Assert.equal(!!/this domain/gi.test(body), true)
        cb()
    })
})
