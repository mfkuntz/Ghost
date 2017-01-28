function createTransport(options) {
    try {
        var Mailer = require('./' + options.service);
        return new Mailer(options);
    }
    catch (error) {
        //todo transform to safe error
        throw error;
    }
}


module.exports = {
    createTransport
}
