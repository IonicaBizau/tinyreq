<!-- Please do not edit this file. Edit the `blah` field in the `package.json` instead. If in doubt, open an issue. -->


[![tinyreq](http://i.imgur.com/FEAaOq2.png)](#)

# tinyreq

 [![Support me on Patreon][badge_patreon]][patreon] [![Buy me a book][badge_amazon]][amazon] [![PayPal][badge_paypal_donate]][paypal-donations] [![Ask me anything](https://img.shields.io/badge/ask%20me-anything-1abc9c.svg)](https://github.com/IonicaBizau/ama) [![Version](https://img.shields.io/npm/v/tinyreq.svg)](https://www.npmjs.com/package/tinyreq) [![Downloads](https://img.shields.io/npm/dt/tinyreq.svg)](https://www.npmjs.com/package/tinyreq) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

<a href="https://www.buymeacoffee.com/H96WwChMy" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/yellow_img.png" alt="Buy Me A Coffee"></a>

> Tiny library for making http(s) requests.

## :cloud: Installation

```sh
# Using npm
npm install --save tinyreq

# Using yarn
yarn add tinyreq
```


:bulb: **ProTip**: You can install the [cli version of this module](https://github.com/IonicaBizau/tinyreq-cli) by running `npm install --global tinyreq-cli` (or `yarn global add tinyreq-cli`).

## :clipboard: Example



```js
const tinyreq = require("tinyreq");

// Make a request to example.com
tinyreq("http://example.com/", (err, body) => {
    console.log(err || body);
});

// Make a request with custom headers
// Using a promise
tinyreq({
    url: "http://example.com/"
  , headers: {
        "user-agent": "Crawler/1.0"
    }
}).then(body => {
    console.log(body);
}).catch(err => {
    console.log(err);
});
```



## :question: Get Help

There are few ways to get help:

 1. Please [post questions on Stack Overflow](https://stackoverflow.com/questions/ask). You can open issues with questions, as long you add a link to your Stack Overflow question.
 2. For bug reports and feature requests, open issues. :bug:

 3. For direct and quick help, you can [use Codementor](https://www.codementor.io/johnnyb). :rocket:



## :memo: Documentation


### `tinyreq(options, callback)`
Creates http(s) requests.

#### Params

- **String|Object** `options`: A string being the request url or an object containing the following fields:
 - `url` (String): The request url.
 - `method` (String): The request method.
 - `data` (Object): The request POST data.
 - `encoding` (String): The response encoding type.
 - `data_encoding` (String): The request encoding type.
- **Function** `callback`: The callback function called (with `error` and `data` parameters).

#### Return
- **EventEmitter** An event emitter you can use for listening for the `data`, `error` and `end` events.



## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].


## :sparkling_heart: Support my projects

I open-source almost everything I can, and I try to reply to everyone needing help using these projects. Obviously,
this takes time. You can integrate and use these projects in your applications *for free*! You can even change the source code and redistribute (even resell it).

However, if you get some profit from this or just want to encourage me to continue creating stuff, there are few ways you can do it:


 - Starring and sharing the projects you like :rocket:
 - [![Buy me a book][badge_amazon]][amazon]—I love books! I will remember you after years if you buy me one. :grin: :book:
 - [![PayPal][badge_paypal]][paypal-donations]—You can make one-time donations via PayPal. I'll probably buy a ~~coffee~~ tea. :tea:
 - [![Support me on Patreon][badge_patreon]][patreon]—Set up a recurring monthly donation and you will get interesting news about what I'm doing (things that I don't share with everyone).
 - **Bitcoin**—You can send me bitcoins at this address (or scanning the code below): `1P9BRsmazNQcuyTxEqveUsnf5CERdq35V6`

    ![](https://i.imgur.com/z6OQI95.png)


Thanks! :heart:


## :dizzy: Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:


 - [`bandcamp-scraper`](https://github.com/masterT/bandcamp-scraper) (by Simon Thiboutôt)—A scraper for https://bandcamp.com
 - [`bnr`](https://github.com/Bloggify/node-bnr#readme) (by Bloggify)—Access resources (e.g. exchange rates) provided by the National Bank of Romania.
 - [`cheerio-req`](https://github.com/IonicaBizau/cheerio-req#readme)—An http request module sending back a Cheerio object.
 - [`github-colors`](https://github.com/IonicaBizau/github-colors)—GitHub colors and file extensions mapping
 - [`google-font-downloader`](https://github.com/Bloggify/google-font-downloader#readme) (by Bloggify)—Download Google fonts by providing the url
 - [`jsonrequest`](https://github.com/IonicaBizau/jsonrequest)—A tiny library for requesting and getting JSON resources.
 - [`kequtwitch`](https://kequtwitch.kequc.com) (by Nathan Lunde-Berry)—This is a node library for interfacing with twitch
 - [`lwipify`](https://github.com/IonicaBizau/lwipify#readme)—Convert images in lwip objects.
 - [`medivia-api`](https://github.com/ethkat/medivia-nodejs-api#readme) (by Ethaan)—Medivia.org NodeJS API
 - [`mun`](https://github.com/theuves/mun#readme) (by Matheus Alves)—Obter informações de municípios do brasileiros.
 - [`page-changed`](https://github.com/IonicaBizau/node-page-changed)—Call a function when the page body is changed.
 - [`payiota`](https://github.com/arizona2014/node-payiota#readme) (by Andy Lisac)—A Node.js wrapper around the Payiota.me API.
 - [`tibia-api`](https://github.com/Ethaan/nodejs-tibia-api#readme) (by Ethaan)—NodeJS Tibia.com API
 - [`tinyreq-cli`](https://github.com/IonicaBizau/tinyreq-cli#readme)—A cli tool for making http(s) requests. CLI for tinyreq.
 - [`wrabbit`](https://github.com/jillix/wrabbit) (by jillix)—Wrap scripts by providing the wrapping function.

## :scroll: License

[MIT][license] © [Ionică Bizău][website]


[badge_patreon]: https://ionicabizau.github.io/badges/patreon.svg
[badge_amazon]: https://ionicabizau.github.io/badges/amazon.svg
[badge_paypal]: https://ionicabizau.github.io/badges/paypal.svg
[badge_paypal_donate]: https://ionicabizau.github.io/badges/paypal_donate.svg

[patreon]: https://www.patreon.com/ionicabizau
[amazon]: http://amzn.eu/hRo9sIZ
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(https%3A%2F%2Fionicabizau.net)&year=2015#license-mit
[website]: https://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
