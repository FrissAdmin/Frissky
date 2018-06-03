import createChannel           from './createChannel';
import findChannel             from '../queries/findChannel';

export default (user, { channelName, withUser }) => new Promise((resolve, reject) => {
  const userIds = withUser !== null ? [user.id, withUser] : [user.id];

  findChannel({ channelName, userIds })
    .then((rows) => {
      if (rows.length === 1) return resolve(rows[0]);

      return createChannel(user, channelName, withUser)
        .then((channel) => resolve(channel))
        .catch((err) => reject(err));
    })
    .catch((err) => reject(err));
});
