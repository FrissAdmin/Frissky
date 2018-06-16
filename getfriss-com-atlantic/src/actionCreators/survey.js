import * as actionTypes   from 'constants/actionTypes';
import store              from 'store';
import userActionCreators from './user';

function findByKey(list, searchKey, defaultValue = null) {
  const answer = list.getIn([searchKey, 'answer']);
  return answer || defaultValue;
}

const surveyAnswersActions = {
  setAnswer: (surveyAnswerInput) => ({
    type    : actionTypes.SET_ANSWER,
    payload : surveyAnswerInput,
  }),

  saveAnswers: () => {
    const surveyAnswers = store.getState().getIn(['survey', 'answers']);

    store.dispatch(userActionCreators.customerCreate({
      email     : findByKey(surveyAnswers, 'email'),
      firstName : findByKey(surveyAnswers, 'firstName'),
      password  : findByKey(surveyAnswers, 'password', 'testtest'),
    }));
  },
};

export default surveyAnswersActions;
