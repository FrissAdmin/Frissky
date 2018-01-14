import getPositionalParameters from '../../lib/getPositionalParameters';
import wrapSQLInPromise        from '../../lib/wrapSQLInPromise';

export default ({ channelName, userIds }) => new Promise((resolve, reject) => {
  const params = userIds;
  let nameWhere = '';

  if (channelName) {
    params.push(channelName);
    nameWhere = `AND name = $${userIds.length + 1}`;
  }

  wrapSQLInPromise(
    `
      SELECT channel_id
      FROM channel_users
      WHERE user_id IN (${getPositionalParameters(userIds)})
        ${nameWhere}
      GROUP BY channel_id
      HAVING COUNT( DISTINCT user_id ) = ${userIds.length}
    `,
    params,
  )
    .then((rows) => resolve(rows))
    .catch((err) => reject(err));
});
