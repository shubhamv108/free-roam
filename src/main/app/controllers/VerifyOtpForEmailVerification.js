const { User } = require('../repositories')

function process(request) {
    if (request.user.emailVerificationCodeExpiry > Date.now()) {
        return 'Email verification code expired';
    }
    if (request.emailVerificationCode === request.user.emailVerificationCode) {
        User.emailVerified(request.user);
    } else {
        return 'Invalid emailVerificationCode';
    }
}