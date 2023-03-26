/**
* @author: https://github.com/GabrSayadi
*/

const { createConnection } = require('mysql')

const conn = createConnection({
    host : process.env.DB_HOSTNAME,
    user : process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
})

conn.connect((err) => {
    if (err) throw new Error('Database Connection Error!');
    console.log('Connection Success');
})

module.exports = conn