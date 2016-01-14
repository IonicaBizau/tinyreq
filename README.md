[![tinyreq](http://i.imgur.com/FEAaOq2.png)](#)

# `$ tinyreq` [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![Version](https://img.shields.io/npm/v/tinyreq.svg)](https://www.npmjs.com/package/tinyreq) [![Downloads](https://img.shields.io/npm/dt/tinyreq.svg)](https://www.npmjs.com/package/tinyreq) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

> Tiny library for making http(s) requests.

## Installation

You can install the package globally and use it as command line tool:

```sh
$ npm i -g tinyreq
```

Then, run `tinyreq --help` and see what the CLI tool can do.

```sh
$ tinyreq --help
Usage: tinyreq [options]

Options:
  -u, --url <url>        The request url.                            
  -m, --method <method>  The request method.                         
  -d, --data <data>      The request data.                           
  -f, --fields <fields>  Other fields to merge in the request object.
  -h, --help             Displays this help.                         
  -v, --version          Displays version information.               

Examples:
  tinyreq -u http://ionicabizau.net

Documentation can be found at https://github.com/IonicaBizau/tinyreq
```

## Example

Here is an example how to use this package as library. To install it locally, as library, you can do that using `npm`:

```sh
$ npm i --save tinyreq
```

```js
// Dependencies
var TinyReq = require("tinyreq");

// Make a request to example.com
TinyReq("http://example.com/", function (err, body) {
    console.log(err || body);
});
```

## Documentation

For full API reference, see the [DOCUMENTATION.md][docs] file.

## How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:

 - [`github-colors`](https://github.com/IonicaBizau/github-colors)

 - [`jsonrequest`](https://github.com/IonicaBizau/node-jsonrequest)

 - [`wrabbit`](https://github.com/jillix/wrabbit) by jillix

## License

[MIT][license] © [Ionică Bizău][website]

[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2015#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md