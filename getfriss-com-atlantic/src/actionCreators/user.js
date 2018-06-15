import * as actionTypes from 'constants/actionTypes';
import graphql from 'lib/api/graphql';
import customerCreate from 'graphQL/mutations/customerCreate';

export default {
  customerCreate: ({
    email,
    firstName,
    lastName,
  }) => ({
    type : actionTypes.CREATE_CUSTOMER,
    payload : graphql(customerCreate, {
      input : {
        email,
        firstName,
        lastName,
        password  : '',
      },
    }),
  }),
};
