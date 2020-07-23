const express = require("express");
const app = express();
const PORT = 5000;

app.use("/logs", require("./api/logs/routes/logs"));

app.listen(PORT, function () {
  console.log(`API listening on port ${PORT} !`);
});
