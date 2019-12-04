# typed-errors

Create custom error types that work with `instanceof` and have stack traces.


Usage
-----

Consider the following from our tests:

```js
require('should');
var makeTypedError = require('typed-errors').makeTypedError;
var FooException = makeTypedError('FooException');

it('should be an instanceof', function () {
    try {
        throw new FooException('Foobar!');
    } catch (e) {
        e.should.be.an.instanceof(FooException);
        e.should.be.an.instanceof(Error);
    }
});
```

Installation
------------

```console
npm install typed-errors
```


Contribute
----------

- Issue Tracker: github.com/bodylabs/typed-errors/issues
- Source Code: github.com/bodylabs/typed-errors

Pull requests welcome!


Support
-------

If you are having issues, please let us know.


License
-------

The project is licensed under the two-clause BSD license.
