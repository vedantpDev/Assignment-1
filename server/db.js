const mysql = require("mysql2");
const conn = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "password",
  database: "book",
});

conn.connect;
module.exports = conn;
