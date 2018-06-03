import getPositionalParameters from '../../lib/getPositionalParameters';
import wrapSQLInPromise        from '../../lib/wrapSQLInPromise';

export default (user, channelId, content) => new Promise((resolve, reject) => {
  const sent = new Date();

  const params = [
    user.id,
    channelId,
    content,
    sent,
  ];

  wrapSQLInPromise(
    `
    INSERT INTO messages( author_id, channel_id, content, sent )
    VALUES (${getPositionalParameters(params)})
    `,
    params,
  )
    .then((rows) => resolve(rows.length > 1))
    .catch((err) => reject(err));
});
