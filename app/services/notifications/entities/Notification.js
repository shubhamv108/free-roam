const { DataTypes } = require('sequelize');
const { NotificationsMysqlService } = require("../NotificatonsMysqlService");

const Notification = NotificationsMysqlService.define('notifications', {
    id: {
        type: DataTypes.INTEGER
    },
    subject: {
        type: DataTypes.TEXT
    },
    template: {
        type: DataTypes.TEXT
    },
    type: {
        type: DataTypes.TEXT
    },
    createdOn: {
        type: DataTypes.DATE
    },
    updatedOn: {
        type: DataTypes.DATE
    }
});

module.exports = Notification;