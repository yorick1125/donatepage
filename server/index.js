const express = require('express')
const app = express()
const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost: 3306',
    user: 'root',
    password: 'password',
    database: 'contributors',
    multipleStatements: true,
});



app.get('/', (req, res) => {
    const sqlInsert = "INSERT INTO contributors.names (name) VALUES ('kobe');";


    db.query(sqlInsert, (err, result) => {
        res.send('Connected succesfully');
        console.log("Result:" + result);
    });
})

app.listen(3003, () => {
    console.log("running server")
})

