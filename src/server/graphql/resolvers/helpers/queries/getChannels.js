import wrapSQLInPromise from '../../lib/wrapSQLInPromise';

export default (userId) => wrapSQLInPromise(
  `
  SELECT c.*
  FROM channels c
  INNER JOIN channel_users cu ON c.id = cu.channel_id
  WHERE cu.user_id = $1
  `,
  [userId],
);
