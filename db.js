'user strict';
// Monaco,Courier,monospace
// Menlo, Monaco, 'Courier New', monospace
var mysql = require('mysql');

//local mysql db connection
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : process.env.password,
    database : process.env.db
});

connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;
