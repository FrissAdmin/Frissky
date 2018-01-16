import * as actionTypes            from 'constants/actionTypes';
import createReducer               from 'reducers/createReducer';
import Immutable                   from 'immutable';
import initialState                from './initialState';

export default createReducer(initialState, {
  [actionTypes.BEGIN_MESSAGE_PENDING]: (state) => state.merge({
    isLoading : true,
  }),

  [actionTypes.BEGIN_MESSAGE_FULFILLED]: (state, { payload: { data } }) => state.merge({
    channels  : state.get('channels').push(Immutable.fromJS(data.beginMessage)),
    isLoading : false,
  }),

  [actionTypes.LOAD_CHANNELS_FULFILLED]: (state, { payload: { data } }) => state.merge({
    channels : Immutable.fromJS(data.channels),
  }),

  [actionTypes.LOAD_MESSAGES_PENDING]: (state, { payload: { channel } }) => state.merge({
    isLoading      : true,
    currentChannel : channel,
    messages       : Immutable.List(),
  }),

  [actionTypes.LOAD_MESSAGES_FULFILLED]: (state, { payload: { data } }) => state.merge({
    isLoading : false,
    messages  : Immutable.fromJS(data.messages),
  }),
});
