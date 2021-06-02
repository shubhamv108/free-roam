const { NotificationService }  = require('../services/notifications/index');
const { OTPUtils } = require('../utils/index');
const { User } = require('../repositories/index');
function process(request) {
    OTPUtils.generateOTP();
    request.user.emailVerificationCode = OTPUtils.generateOTP();
    User.setNewEmailVerificationCode(request.user.emailVerificationCode);
    NotificationService.send(request.user.emailId, 1, resendEmailVerificationRequest);
}