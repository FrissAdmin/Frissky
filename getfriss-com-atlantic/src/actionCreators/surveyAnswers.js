import * as actionTypes from 'constants/actionTypes';

const surveyAnswersActions = {
  setAnswer: (surveyAnswerInput) => ({
    type    : actionTypes.SET_ANSWER,
    payload : surveyAnswerInput,
  }),

  saveAnswers: () => ({
    type : actionTypes.SAVE_ANSWERS,
  }),
};

export default surveyAnswersActions;
