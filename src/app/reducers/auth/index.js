import * as actionTypes from 'constants/actionTypes';
import createReducer    from 'reducers/createReducer';
import Immutable        from 'immutable';
import initialState     from './initialState';

export default createReducer(initialState, {
  [actionTypes.LOAD_AUTH_DATA_FULFILLED]: (state, { payload: { data } }) =>
    state.set('user', Immutable.fromJS(data.authData)),

  [actionTypes.LOGIN_FULFILLED]: (state, { payload: { data } }) => {
    if (data.errors) {
      return state.merge({
        isLoggedIn : false,
        user       : null,
      });
    }

    return state.merge({
      isLoggedIn : true,
      user : Immutable.fromJS(data.user),
    });
  },

  [actionTypes.LOGOUT]: state => {
    window.localStorage.removeItem('friss_app_token');

    return state.merge({
      isLoggedIn : false,
      token      : null,
      user       : null,
    });
  },

  [actionTypes.REGISTER_FULFILLED]: (state, { payload: { data: { register } } }) => {
    if (register.error) return state.merge({ error : register.error });

    window.localStorage.setItem('friss_app_token', register.token);

    return state.merge({
      token      : register.token,
      isLoggedIn : true,
    });
  },
});
