const { handleReadAllLogs, handleReadOneLogs } = require("../handlers/logs");

// GET ALL
exports.readAll = async (req, res) => {
  const Result = await handleReadAllLogs();
  console.log(Result);
  res.status("200").json("ok");
};

// GET One
exports.readOne = async (req, res) => {
  const { status, message } = await handleReadOneLogs(req.params.id);
  res.status(status).json(message);
};
