import wrapSQLInPromise from '../../lib/wrapSQLInPromise';

export default (hash, mustBeActive) => {
  const activeQuery = mustBeActive ? 'AND active' : '';

  return wrapSQLInPromise(
    `SELECT *
      FROM users
      WHERE password = $1 ${activeQuery}`,
    [hash],
  );
};
