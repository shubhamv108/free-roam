const AWS = require('aws-sdk');

const client = new AWS.SES({apiVersion: '2010-12-01'});

function sendHtml(fromAddresses, toAddresses, ccAddresses, subject, body, replyToAddresses, onSuccess, onError) {
    params = {
        Message: {
            Body: {
                Html: {
                    Charset: "UTF-8",
                    Data: body
                }
            }
        }
    };
    send(params, fromAddresses, toAddresses, ccAddresses, subject, body, replyToAddresses, onSuccess, onError);
}

function sendText(fromAddresses, toAddresses, ccAddresses, subject, body, replyToAddresses, onSuccess, onError) {
    params = {
        Message: {
            Body: {
                Text: {
                    Charset: "UTF-8",
                    Data: body
                }
            }
        }
    };
    send(params, fromAddresses, toAddresses, ccAddresses, subject, body, replyToAddresses, onSuccess, onError);
}

function send(params, fromAddresses, toAddresses, ccAddresses, subject, body, replyToAddresses, onSuccess, onError) {
    params.Destination = {
        CcAddresses: ccAddresses,
        ToAddresses: toAddresses
    };
    params.Message.Subject = {
        Charset: 'UTF-8',
        Data: subject
    };
    params.Source = fromAddresses;
    params.ReplyToAddresses = replyToAddresses;

    client.sendEmail(params)
        .then(onSuccess)
        .catch(onError);
}

module.exports = {
    sendHtml, sendText
};