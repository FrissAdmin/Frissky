import getConnectionPool from './getConnectionPool';

export default () => new Promise((resolve, reject) => {
  getConnectionPool().connect((err, client) => {
    if (err) {
      return reject(err);
    }

    return resolve(client);
  });
})
  .catch((err) => {
    if (process.env.NODE_ENV !== 'production') {
      /* eslint-disable no-console */
      console.log('Could not connect to the database. Are you sure one is running?');
      console.log(`Error message: ${err}`);
      /* eslint-enable no-console */
    }
  });
