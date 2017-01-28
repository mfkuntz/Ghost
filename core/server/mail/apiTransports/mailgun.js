var request = require('superagent');

var BaseUrl = 'https://api.mailgun.net/v3';

function Mailgun(config) {
    this.config = config;
    if (config.host) {
        BaseUrl = BaseUrl + "/" + config.host;
    }
}

Mailgun.prototype.sendMail = function(message, callback) {
    console.log(JSON.stringify(message, null, 2));

    request
        .post(BaseUrl + '/messages')
        .type('form')
        .auth('api', this.config.auth.token)
        .send(message)
        .end(function(err, res) {
            if (err !== null) {
                console.error(err);
                console.log(JSON.stringify(res, null, 2));
            }
            callback(err, res);
        });
}

module.exports = Mailgun;
