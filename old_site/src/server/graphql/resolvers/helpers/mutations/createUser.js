import wrapSQLInPromise from '../../lib/wrapSQLInPromise';

export default (userObj) => {
  const values = [];
  const params = [];
  const fields = [];

  Object.keys(userObj).forEach((key, index) => {
    fields.push(key);
    params.push(userObj[key]);
    values.push(`$${index + 1}`);
  });

  return wrapSQLInPromise(
    `INSERT INTO users (${fields.join(', ')})
    VALUES (${values.join(', ')})`,
    params,
  );
};
