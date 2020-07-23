const mysql = require("mysql");
const express = require("express");
const app = express();
app.get("/", function (req, res) {
  res.send("Hello World!");
});

const connection = mysql.createConnection({
  host: "localhost",
  user: "rsyslog",
  password: "Supinfo1!",
  database: "Syslog",
});

connection.connect((err) => {
  if (err) throw err;
  console.log("Connected!");
});

connection.query("SELECT * FROM SystemEvents", (err, rows) => {
  if (err) throw err;

  console.log("Data received from Db:");
  console.log(rows);
});

app.listen(3000, function () {
  console.log("Example app listening on port 3000!");
});
