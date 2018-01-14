import { PubSub, withFilter } from 'graphql-subscriptions';

const pubsub = new PubSub();

export default {
  messageAdded: {
    subscribe: withFilter(
      () => pubsub.asyncIterator('messageAdded'),
      (payload, variables) => payload.channel === variables.channel,
    ),
  },
};
