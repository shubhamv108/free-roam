require('dotenv').config();

const SERVER_PORT = process.env.SERVER_PORT || 3000;

const FREE_ROAM_DB = {
    NAME: process.env.FREE_ROAM_DB_NAME || 'free_roam',
    USERNAME: process.env.FREE_ROAM_DB_USERNAME || 'root',
    PASSWORD: process.env.FREE_ROAM_DB_PASSWORD || 'root1234',
    HOST: process.env.FREE_ROAM_DB_HOST || 'http://127.0.0.1:3306/',
    DIALECT: process.env.FREE_ROAM_DB_DIALECT || 'mysql',
    MAX_CONNECTIONS: process.env.FREE_ROAM_DB_MAX_CONNECTIONS || 20,
    MIN_CONNECTIONS: process.env.FREE_ROAM_DB_MIN_CONNECTIONS || 1
};

JWT = {
    TOKEN_SECRET: process.env.JWT_TOKEN_SECRET || 'dev'
};

const SMTP_SERVER = {
    HOST: process.env.SMTP_SERVER_HOST || 'email-smtp.ap-south-1.amazonaws.com',
    PORT: process.env.SMTP_SERVER_PORT || 25,
    USERNAME: process.env.SMTP_SERVER_USERNAME || 'AKIAXTJK7XDQMQSMRL7C',
    PASSWORD: process.env.SMTP_SERVER_PASSWORD || 'BOmONQXME7Z/5COcQkbRwWviITzReOYKAvgvRTLl7IPx',
};

const NOTIFICATIONS_DB = {
    NAME: process.env.NOTIFICATIONS_DB_NAME || 'notifications',
    USERNAME: process.env.NOTIFICATIONS_DB_USERNAME || 'root',
    PASSWORD: process.env.NOTIFICATIONS_DB_PASSWORD || 'root1234',
    HOST: process.env.NOTIFICATIONS_DB_HOST || 'http://127.0.0.1:3306/',
    DIALECT: process.env.NOTIFICATIONS_DB_DIALECT || 'mysql',
    MAX_CONNECTIONS: process.env.NOTIFICATIONS_DB_MAX_CONNECTIONS || 20,
    MIN_CONNECTIONS: process.env.NOTIFICATIONS_DB_MIN_CONNECTIONS || 0
};

const NOTIFICATIONS = {
    EMAIL: {
        FROM_ADDRESSES: [ process.env.NOTIFICATIONS_EMAIL_FROM_ADDRESSES || 'shubham@kalagato.co' ],
        TO_ADDRESSES: [ process.env.NOTIFICATIONS_EMAIL_TO_ADDRESSES || 'shubham@kalagato.co' ],
        CC_ADDRESSES: [ process.env.NOTIFICATIONS_EMAIL_CC_ADDRESSES || 'shubham@kalagato.co' ]
    }
};

const REDSHIFT_CLUSTER = {
    HOST: process.env.REDSHIFT_CLUSTER_HOST || 'redshift-cluster-2.cloe9tmn3gbb.ap-south-1.redshift.amazonaws.com',
    PORT: process.env.REDSHIFT_CLUSTER_PORT || 5439,
    MAX_CONNECTIONS: process.env.REDSHIFT_CLUSTER_CONNECTION_POOL_MAX_CONNECTIONS || 50,
    DATABASE: process.env.REDSHIFT_CLUSTER_DATABASE || 'dev',
    USERNAME: process.env.REDSHIFT_CLUSTER_USERNAME || 'awsuser',
    PASSWORD: process.env.REDSHIFT_CLUSTER_PASSWORD || 'Password123'
};

const REDIS_URL = process.env.REDIS_URL || 'http://127.0.0.1';

module.exports = {
  SERVER_PORT, FREE_ROAM_DB, JWT, SMTP_SERVER, NOTIFICATIONS, REDSHIFT_CLUSTER, REDIS_URL
};