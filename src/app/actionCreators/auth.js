import * as actionTypes from 'constants/actionTypes';
import graphql          from 'lib/api/graphql';
import login            from 'graphQL/mutations/login.graphql';
import register         from 'graphQL/mutations/register.graphql';

export default {
  login: (email, password) => ({
    type    : actionTypes.LOGIN,
    payload : graphql(login, {
      email,
      password,
    }),
  }),

  register: (email, password) => ({
    type    : actionTypes.REGISTER,
    payload : graphql(register, {
      email,
      password,
    }),
  }),
};
