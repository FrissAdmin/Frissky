import wrapSQLInPromise from '../lib/wrapSQLInPromise';

export default (email, mustBeActive) => {
  const activeQuery = mustBeActive ? 'AND active' : '';

  return wrapSQLInPromise(
    `SELECT
        id,
        email,
        role,
        first_name,
        last_name
      FROM users
      WHERE email = $1 ${activeQuery}`,
    [email],
  );
};
