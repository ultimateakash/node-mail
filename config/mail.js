module.exports = { 
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    username: process.env.MAIL_USERNAME,
    password: process.env.MAIL_PASSWORD, 
    from_address: process.env.MAIL_FROM_ADDRESS,
    from_name: process.env.MAIL_FROM_NAME
}