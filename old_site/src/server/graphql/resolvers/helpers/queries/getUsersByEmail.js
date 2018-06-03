import wrapSQLInPromise from '../../lib/wrapSQLInPromise';

export default (email, mustBeActive) => {
  const activeQuery = mustBeActive ? 'AND active' : '';

  return wrapSQLInPromise(
    `SELECT *
      FROM users
      WHERE email = $1 ${activeQuery}`,
    [email],
  );
};
