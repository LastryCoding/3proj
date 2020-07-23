const { db } = require("../../../utils/dbConnection");

exports.query = async (Query) => {
  db.query(Query, (err, rows) => {
    if (err) {
      console.error(err);
      return {
        status: 500,
        message: err,
      };
    } else {
      return {
        status: 200,
        message: rows,
      };
    }
  });
};
