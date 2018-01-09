import * as actionTypes from 'constants/actionTypes';
import createReducer    from 'reducers/createReducer';
import Immutable        from 'immutable';
import initialState     from './initialState';

export default createReducer(initialState, {
  [actionTypes.LOAD_AUTH_DATA_FULFILLED]: (state, { payload: { data } }) =>
    state.set('user', Immutable.fromJS(data.authData)),

  [actionTypes.LOGIN_FULFILLED]: (state, { payload: { data: { login } } }) => {
    if (login.error) return state.merge({ error : login.error });

    window.localStorage.setItem('friss_app_token', login.token);

    return state.merge({
      isLoggedIn : true,
      token      : login.token,
      user       : Immutable.fromJS(login.user),
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
      isLoggedIn : true,
      token      : register.token,
      user       : Immutable.fromJS(register.user),
    });
  },
});
