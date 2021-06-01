const EmailService = require('./EmailService');
const { Notifications } = require('./constants/index').Enum;
const { TemplateUtils } = require('./utils/TemplateUtils');

function send(toAddress, notificationId, valueObject) {
    const notification = Notification.findById(notificationId);
    if (notification.type === Notifications.EMAIL_TEXT || notification.type === Notifications.EMAIL_HTML) {
        notification.template = TemplateUtils.populateValuesInTemplate(notification.template, valueObject);
        EmailService.send(toAddress, notification);
    }
}

module.exports = {
    send
};