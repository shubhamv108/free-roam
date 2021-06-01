const { SESUtils } = require('./utils/index');
const { EMAIL } = require('../../constants').EnvironmentConfiguration.NOTIFICATIONS;
const { Notification, NotificationLog } = require('./repositories/index');
const { Notifications } = require('./constants/Enum');

function send(emailId, notificationId) {
    const notification = Notification.findById(notificationId);
    if (notification) {
        send(emailId, notification);
    }
}

function send(emailId, notification) {
    if (notification.type === Notifications.EMAIL_HTML) {
        SESUtils.sendHtml(EMAIL.FROM_ADDRESSES, emailId, [], notification.subject, notification.template, [], onSuccess, onError);
    }
    if (notification.type === Notifications.EMAIL_TEXT) {
        SESUtils.sendText(EMAIL.FROM_ADDRESSES, emailId, [], notification.subject, notification.template, [], onSuccess, onError);
    }
}

function onSuccess(notificationid, subject, body, toAddresses) {
    return function log(data) {
        for (const toAddress of toAddresses) {
            try {
                NotificationLog.save(notificationid, subject, body, data.messageId, toAddress);
            } catch (e) {
                console.log(e);
            }
        }
    }
}

var onError = (error) => {
    console.log(error);
};