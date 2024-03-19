const multer = require('multer');
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "phoneshop"
})
connection.connect((err) => {
    if (err) {
        console.log(err)
    } else {
        console.log("connected to MySQL")
    }
})
module.exports = connection;