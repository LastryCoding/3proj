const { connection } = require("../../utils/dbConnection");

exports.query = async (Query) => {
  let promise = new Promise(async (resolve, reject) => {
    await connection.query(Query, (err, rows) => {
      let response = {};
      if (err) {
        console.error(err);
        response = {
          status: 500,
          message: err,
        };
      } else {
        console.log("test");
        response = {
          status: 200,
          message: rows,
        };
      }
      resolve(response);
    });
  });
  let result = await promise.then((value) => {
    return value;
  });
  return result;
};
