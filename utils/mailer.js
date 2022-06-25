const nodemailer = require('nodemailer');
const config = require('../config/mail');
 
const transporter = nodemailer.createTransport({
    host: config.host,
    port: config.port,
    secure: false, // true for 465, false for other ports
    auth: {
        user: config.username,
        pass: config.password
    },
},{
    from: `${config.from_name} <${config.from_address}>`
});

exports.sendMail = (fields) => transporter.sendMail(fields);
