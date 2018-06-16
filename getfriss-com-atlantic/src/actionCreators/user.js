import * as actionTypes from 'constants/actionTypes';
import customerCreate   from 'graphQL/mutations/customerCreate';
import graphql          from 'lib/api/graphql';

export default {
  customerCreate: ({
    email,
    firstName,
    lastName,
    password,
  }) => ({
    type : actionTypes.CREATE_CUSTOMER,
    payload : graphql(customerCreate, {
      input : {
        email,
        firstName,
        lastName,
        password,
      },
    }),
  }),
};
