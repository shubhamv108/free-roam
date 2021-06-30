const Status = {
    ACTIVE: 'Active',
    INACTIVE: 'Inactive',
    EXPIRED: 'Expired'
};

const UserType = {
    ADMIN: 'ADMIN',
    CLIENT_ADMIN: 'CLIENT_ADMIN',
    CLIENT_USER: 'CLIENT_USER',
    INDIVIDUAL_CLIENT: 'INDIVIDUAL_CLIENT'
};

const ClientType = {
    INDIVIDUAL: 'INDIVIDUAL',
    ORGANIZATION: 'ORGANIZATION'
};

module.exports = {
    Status, UserType, ClientType
}