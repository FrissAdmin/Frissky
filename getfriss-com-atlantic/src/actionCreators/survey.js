import * as actionTypes   from 'constants/actionTypes';
import createMetaFields   from 'graphQL/mutations/createMetaFields';
import customerCreate     from 'graphQL/mutations/customerCreate';
import lambda             from 'lib/api/lambda';
import shopify            from 'lib/api/shopify';

const surveyAnswersActions = {
  setAnswer: (surveyAnswerInput) => ({
    type    : actionTypes.SET_ANSWER,
    payload : surveyAnswerInput,
  }),

  saveAnswers: () => (dispatch, getState) => {
    const surveyAnswers = getState().getIn(['survey', 'answers']);

    const customerCreatePromise = shopify(customerCreate, {
      input : {
        email     : surveyAnswers.get('email'),
        firstName : surveyAnswers.get('firstName'),
        lastName  : surveyAnswers.get('lastName') || '',
        password  : surveyAnswers.get('password') || 'testtest',
      },
    });

    dispatch({
      type    : actionTypes.CREATE_CUSTOMER,
      payload : customerCreatePromise,
    });

    customerCreatePromise
      .then(response => {
        const { data: { customerCreate: { customer } } } = response;

        if (customer === null) return response;

        console.log('create response: ', response);

        const encodedId = customer.id;
        const matches = atob(encodedId).match(/\/(\d+)$/);

        if (matches === null) return response;

        const actualId = matches[1];

        console.log('request payload: ', {
          customer : actualId,
          fields   : surveyAnswers.keySeq().map(key => ({
            key,
            value : surveyAnswers.get(key),
          })).toJS(),
        });

        dispatch({
          type    : actionTypes.SAVE_SURVEY,
          payload : lambda(createMetaFields, {
            customer : actualId,
            fields   : surveyAnswers.keySeq().map(key => ({
              key,
              value : surveyAnswers.get(key),
            })).toJS(),
          }),
        });

        return response;
      });
  },
};

export default surveyAnswersActions;
