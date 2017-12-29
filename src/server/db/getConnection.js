import getConnectionPool from './getConnectionPool';

export default () => new Promise((resolve, reject) => {
  getConnectionPool().connect((err, client) => {
    if (err) {
      return reject(err);
    }

    return resolve(client);
  });
});
