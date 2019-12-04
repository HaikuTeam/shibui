require('should');

var makeTypedError = require('./make-typed-error');

describe('makeTypedError', function () {

    var FooException = makeTypedError('FooException');

    it('should be an instanceof', function () {
        try {
            throw new FooException('Exn_Message');
        } catch (e) {
            e.should.be.an.instanceof(FooException);
            e.should.be.an.instanceof(Error);
        }
    });

    it('should create distinct types', function () {
        var CopyOfFooException = makeTypedError('FooException');
        try {
            throw new FooException('Exn_Message');
        } catch (e) {
            e.should.not.be.an.instanceof(CopyOfFooException);
        }
    });

    it('should have a message', function () {
        try {
            throw new FooException('Exn_Message');
        } catch (e) {
            e.message.should.equal('Exn_Message');
        }
    });

    it('should produce a good stack trace', function () {
        try {
            throw new FooException('Exn_Message');
        } catch (e) {
            // starts with correct name and where it was thrown from
            e.stack.should.match(/^FooException: Exn_Message\n {4}at new TypedError \(\S+make-typed-error.js:\d+:\d+\)/);
            // eventually points to where it was thrown in this very file
            e.stack.should.match(/\(\S+make-typed-error.spec.js:\d+:\d+\)/);
        }
    });
});
