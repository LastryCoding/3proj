const { connection } = require("../../utils/dbConnection");

exports.query = async (Query) => {
  let response = {};
  await connection.query(Query, (err, rows) => {
    if (err) {
      console.error(err);
      return (response = {
        status: 500,
        message: err,
      });
    } else {
      return (esponse = {
        status: 200,
        message: rows,
      });
    }
  });
  return response;
};
