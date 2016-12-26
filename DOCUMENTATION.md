## Documentation

You can see below the API reference of this module.

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

