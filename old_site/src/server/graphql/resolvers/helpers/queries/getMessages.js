import wrapSQLInPromise from '../../lib/wrapSQLInPromise';

export default (channelId, userId, afterTimestamp = null) => {
  const params = [
    channelId,
    userId,
  ];

  let afterTimestampWhere = '';

  if (afterTimestamp !== null) {
    params.push(afterTimestamp);
    afterTimestampWhere = 'AND m.sent > $3';
  }

  return wrapSQLInPromise(
    `
    SELECT m.*
    FROM messages m
    INNER JOIN channel_users cu ON m.channel_id = cu.channel_id
    WHERE cu.user_id = $2
      AND m.channel_id = $1
      ${afterTimestampWhere}
    `,
    params,
  );
};
