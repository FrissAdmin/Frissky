import * as actionTypes from 'constants/actionTypes';
import graphql          from 'lib/api/graphql';
import loadAuthData     from 'graphQL/queries/loadAuthData.graphql';
import login            from 'graphQL/mutations/login.graphql';
import register         from 'graphQL/mutations/register.graphql';

export default {
  loadAuthData: () => ({
    type : actionTypes.LOAD_AUTH_DATA,
    payload : graphql(loadAuthData),
  }),

  login: (email, password) => ({
    type    : actionTypes.LOGIN,
    payload : graphql(login, {
      email,
      password,
    }),
  }),

  logout: () => ({
    type : actionTypes.LOGOUT,
  }),

  register: (email, password) => ({
    type    : actionTypes.REGISTER,
    payload : graphql(register, {
      email,
      password,
    }),
  }),
};
