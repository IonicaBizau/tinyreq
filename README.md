![](http://i.imgur.com/FEAaOq2.png)

# tinyreq
Tiny library for making http(s) requests.

## Installation

```
$ npm install tinyreq
```

There is a cli version (which can be installed via `npm i -g tinyreq`). Run `tinyreq -h` for help info.

## Example

```js
// Dependencies
var TinyReq = require("tinyreq");

// Make a request
TinyReq("http://example.com/", function (err, body) {
    console.log(err || body);
});
```

## Documentation
### `TinyReq(options, callback)`
Creates http(s) requests.

#### Params
- **String|Object** `options`: A string being the request url or an object containing the following fields:
 - `url` (String): The request url.
 - `method` (String): The request method.
 - `data` (Object): The request POST data.

- **Function** `callback`: The callback function called (with `error` and `data` parameters).

#### Return
- **Object** The request object.


## How to contribute
1. File an issue in the repository, using the bug tracker, describing the
   contribution you'd like to make. This will help us to get you started on the
   right foot.
2. Fork the project in your account and create a new branch:
   `your-great-feature`.
3. Commit your changes in that branch.
4. Open a pull request, and reference the initial issue in the pull request
   message.

## License
See the [LICENSE](./LICENSE) file.
