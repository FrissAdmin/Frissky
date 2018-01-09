import wrapSQLInPromise from '../../lib/wrapSQLInPromise';

export default () => wrapSQLInPromise(
  `SELECT *
    FROM users
    WHERE active`,
  [],
);
