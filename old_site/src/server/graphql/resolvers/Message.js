export default {
  author: (message) => ({ id : message.author_id }),
  channel: (message) => ({ id : message.channel_id }),
};
