const { DataTypes } = require('sequelize');
const { NotificationsMysqlService } = require("../NotificatonsMysqlService");

const NotificationLog = NotificationsMysqlService.define('notification_logs', {
    id: {
        type: DataTypes.INTEGER
    },
    notificationId: {
        type: DataTypes.INTEGER
    },
    serverMessageId: {
        type: DataTypes.INTEGER
    },
    subject: {
        type: DataTypes.TEXT
    },
    template: {
        type: DataTypes.TEXT
    },
    sentTo: {
        type: DataTypes.STRING
    },
    createdOn: {
        type: DataTypes.DATE
    }
});