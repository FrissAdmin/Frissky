import getPositionalParameters from '../../lib/getPositionalParameters';
import wrapSQLInPromise        from '../../lib/wrapSQLInPromise';

export default (user, channelName = null, withUser = null) => new Promise((resolve, reject) => {
  const channelFields = ['id'];
  const channelValues = [user.id];

  if (channelName !== null) {
    channelFields.push('name');
    channelValues.push(channelName);
  }

  wrapSQLInPromise(
    `
    INSERT INTO channels( ${channelFields.join(', ')} )
    VALUES (${getPositionalParameters(channelValues)})
    RETURNING id
    `,
    channelValues,
  ).then((rows) => {
    if (rows.length < 1) reject();

    const newChannel = rows[0];
    const values = [newChannel.id, user.id];
    const params = ['($1, $2)'];

    if (user !== null) {
      values.push(newChannel.id);
      values.push(withUser);
      params.push('($3, $4)');
    }

    wrapSQLInPromise(
      `
      INSERT INTO channel_users( channel_id, user_id )
      VALUES ${params.join(', ')}
      `,
      values,
    )
      .then(() => resolve(newChannel))
      .catch((err) => reject(err));
  })
    .catch((err) => reject(err));
});
