export default (connectionPromise, sql, params) => new Promise((resolve, reject) => {
  connectionPromise.then((client) => {
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
