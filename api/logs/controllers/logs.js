const { handleReadAllLogs, handleReadOneLogs } = require("../handlers/logs");

// GET ALL
exports.readAll = async (req, res) => {
  const { status, message } = await handleReadAllLogs();
  res.status(status).json(message);
};

// GET One
exports.readOne = async (req, res) => {
  const { status, message } = await handleReadOneLogs(req.params.id);
  res.status(status).json(message);
};
