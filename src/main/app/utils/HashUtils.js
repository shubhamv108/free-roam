var crypto = require('crypto');

function MD5(data) {
    return crypto.createHash('md5').update(name).digest('hex');
}

module.exports = {
    MD5
}