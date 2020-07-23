const { connection } = require("../../utils/dbConnection");

exports.query = async (Query) => {
  let response = {};
  await connection.query(Query, (err, rows) => {
    if (err) {
      console.error(err);
      response = {
        status: 500,
        message: err,
      };
    } else {
      response = {
        status: 200,
        message: rows,
      };
    }
  });
  console.log(response);
  return response;
};
