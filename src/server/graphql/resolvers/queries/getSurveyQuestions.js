export default (connection) => new Promise((resolve, reject) => {
  connection.then(client => client.query(
    'SELECT id, title, subtitle, type FROM survey_questions',
    (err, results) => {
      if (err) return reject(err);
      return resolve(results.rows);
    },
  ));
});
