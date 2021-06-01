const { Notification } = require('../entities/index');

function findById(id) {
    Notification.findOne({
        where: {
            id: id
        }
    });
}

module.exports = {
    findById
};