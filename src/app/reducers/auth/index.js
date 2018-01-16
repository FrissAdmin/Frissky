import * as actionTypes from 'constants/actionTypes';
import createReducer    from 'reducers/createReducer';
import Immutable        from 'immutable';
import initialState     from './initialState';

const noAuth = (state, errorMessage = null) => {
  window.localStorage.removeItem('friss_app_token');

  return state.merge({
    error     : errorMessage,
    isLoaded  : true,
    isLoading : false,
    token     : null,
    user      : null,
  });
};

export default createReducer(initialState, {
  [actionTypes.LOAD_AUTH_DATA_FULFILLED]: (state, { payload: { data } }) => {
    if (!data.authData) return noAuth(state);

    return state.merge({
      isLoaded  : true,
      isLoading : false,
      user      : Immutable.fromJS(data.authData),
    });
  },

  [actionTypes.LOAD_AUTH_DATA_REJECTED]: state => noAuth(state),

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
