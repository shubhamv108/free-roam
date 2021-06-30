const { NotificationLog } = require('../entities');

function save(notificationId, subject, body, serverMessageId, toAddress) {
    return Notification.create({
        notificationId: notificationId,
        subject: subject,
        body: body,
        serverMessageId: serverMessageId,
        sentTo: toAddress
    });
}

module.exports = {
    save
};