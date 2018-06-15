import * as actionTypes     from 'constants/actionTypes';
import createReducer        from 'reducers/createReducer';
import Immutable            from 'immutable';
import initialState         from './initialState';

export default createReducer(initialState, {
  [actionTypes.SET_ANSWER]: (state, { payload }) =>
    state.setIn(['answers', payload.question], Immutable.fromJS(payload)),

  [actionTypes.SAVE_ANSWERS_FULFILLED]: state => state.set('saved', true),
});
