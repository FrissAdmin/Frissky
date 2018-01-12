import * as actionTypes from 'constants/actionTypes';
import graphql          from 'lib/api/graphql';
import store            from 'app/store';
import surveyAnswers    from 'graphQL/mutations/surveyAnswers.graphql';

const surveyAnswersActions = {
  setAnswer: (surveyAnswerInput) => ({
    type    : actionTypes.SET_ANSWER,
    payload : surveyAnswerInput,
  }),

  setSaveAfterLogin: () => ({
    type : actionTypes.SET_SAVE_ANSWERS_AFTER_LOGIN,
  }),

  saveAnswers: (requiresLogin = false) => {
    if (requiresLogin) return surveyAnswersActions.setSaveAfterLogin();

    return {
      type : actionTypes.SAVE_ANSWERS,
      payload : graphql(surveyAnswers, {
        answers : Object.values(store.getState().getIn(['surveyAnswers', 'answers']).toJS()),
      }),
    };
  },
};

export default surveyAnswersActions;
