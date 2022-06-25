const { sendMail } = require('../utils/mailer');
const hbs = require('hbs');
const fs = require('fs');
const readFile = require('util').promisify(fs.readFile);

exports.example1 = async (req, res) => {
    const email = 'akashmjp@gmail.com';
    const article = {
        title: 'Lorem Ipsum',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    }

    const content  = await readFile('views/emails/newsletter.hbs','utf8');  
    const template = hbs.compile(content);
    const html = template({ article });

    await sendMail({
        to: email,
        subject: 'Weekly Newsletter', 
        html: html
    })
    return res.send('Email Sent. - Example1')
}

exports.example2 = async (req, res) => {
    const email = 'akashmjp@gmail.com';
    const text = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'

    await sendMail({
        to: email,
        subject: 'Weekly Newsletter', 
        text: text
    })
    return res.send('Email Sent. - Example2')
}    