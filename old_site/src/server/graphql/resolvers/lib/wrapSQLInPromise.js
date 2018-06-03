import getConnection from '../../../db/getConnection';

export default (sql, params) => new Promise((resolve, reject) => {
  getConnection().then((client) => {
    client.query(
      sql,
      params,
      (err, results) => {
        if (err) reject(err);
        if (!err) resolve(results.rows);

        client.release();
      },
    );
  });
});
