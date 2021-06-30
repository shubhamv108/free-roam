const { Notification } = require('../entities');

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