var _ = require('underscore');

var makeTypedError = function (name, Supertype) {

    Supertype = Supertype || Error;

    var TypedError = function (message) {
        var sup = new Supertype(message);
        _(this).extend(sup);
        this.name = name;
        this.message = message;

        // replace 'Error' with actual name in stack trace
        this.stack = sup.stack.replace(/^[^:]+:/, name + ':');
    };

    TypedError.prototype = Object.create(Supertype.prototype);
    TypedError.prototype.constructor = TypedError;

    return TypedError;
};

module.exports = makeTypedError;
