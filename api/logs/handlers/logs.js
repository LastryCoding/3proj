const { query } = require("../../common/query");

//READ ALL
exports.handleReadAllLogs = async () => {
  return await query("SELECT * FROM SystemEvents");
};
//READ ONE
exports.handleReadOneLogs = async (id) => {
  return await query(`SELECT * FROM SystemEvents WHERE ID=${id}`);
};
