const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "rsyslog",
  password: "Supinfo1!",
  database: "Syslog",
});

const db = connection.connect((err) => {
  if (err) throw err;
  console.log("Connected!");
});

module.exports = { connection };
