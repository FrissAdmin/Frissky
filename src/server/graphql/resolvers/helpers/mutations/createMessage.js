import getPositionalParameters from '../../lib/getPositionalParameters';
import wrapSQLInPromise        from '../../lib/wrapSQLInPromise';

export default (user, channelId, content) => new Promise((resolve, reject) => {
  const sent = Date.now();

  const params = [
    user.id,
    channelId,
    content,
    Buffer.from(`${channelId}:${user.id}:${sent}`).toString('base64'),
    sent,
  ];

  wrapSQLInPromise(
    `
    INSERT INTO messages( author_id, channel_id, content, id, sent )
    VALUES (${getPositionalParameters(params)})
    `,
    params,
  )
    .then((rows) => resolve(rows.length > 1))
    .catch((err) => reject(err));
});
