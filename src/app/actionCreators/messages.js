import * as actionTypes from 'constants/actionTypes';
import beginMessage     from 'graphQL/mutations/beginMessage.graphql';
import getIn            from 'lib/getIn';
import graphql          from 'lib/api/graphql';
import loadChannels     from 'graphQL/queries/loadChannels.graphql';
import loadMessages     from 'graphQL/queries/loadMessages.graphql';
import sendMessage      from 'graphQL/mutations/sendMessage.graphql';
import store            from 'app/store';

const messagessActions = {
  beginMessage: (userId) => ({
    type    : actionTypes.BEGIN_MESSAGE,
    payload : graphql(beginMessage, { withUser : userId })
      .then((response) => {
        if (getIn(response, ['data', 'beginMessage', 'id']) !== undefined) {
          store.dispatch(
            messagessActions.loadMessages(getIn(response, ['data', 'beginMessage', 'id'])),
          );
        }

        return response;
      }),
  }),

  loadChannels: () => ({
    type    : actionTypes.LOAD_CHANNELS,
    payload : graphql(loadChannels),
  }),

  loadMessages: (channel) => ({
    type    : actionTypes.LOAD_MESSAGES,
    payload : {
      data    : { channel },
      promise : graphql(loadMessages, { channel }),
    },
  }),

  sendMessage: ({ channel, content }) => ({
    type : actionTypes.SEND_MESSAGE,
    payload : graphql(sendMessage, { channel, content }),
  }),
};

export default messagessActions;
