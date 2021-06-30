const { NotificationService }  = require('../services/notifications');
const { OTPUtils } = require('../utils');
const { User } = require('../repositories');
function process(request) {
    OTPUtils.generateOTP();
    request.user.emailVerificationCode = OTPUtils.generateOTP();
    User.setNewEmailVerificationCode(request.user.emailVerificationCode);
    NotificationService.send(request.user.emailId, 1, resendEmailVerificationRequest);
}