import * as actionTypes     from 'constants/actionTypes';
import createReducer        from 'reducers/createReducer';
import Immutable            from 'immutable';
import initialState         from './initialState';

export default createReducer(initialState, {
  [actionTypes.CREATE_CUSTOMER_FULFILLED]: (state, { payload }) => state.set(
    'user',
    Immutable.fromJS(payload.data.customerCreate.customer),
  ),
});
