const bcrypt = require ('bcrypt');

const saltRounds = 10;

function getSaltedHash(password) {
    return bcrypt.hash(password, saltRounds, function(err, hash) {
        if (err) {
            return "Error generating hash";
        }
        return hash;
    });
};

function isPasswordMatching(password, hashedPassword) {
    bcrypt.compare(password, hash, function(err, result) {
        if (err) {
            return "Password do not match";
        } else if (result) {
            return true;
        }
    });
};

module.exports = {
    getSaltedHash, isPasswordMatching
};