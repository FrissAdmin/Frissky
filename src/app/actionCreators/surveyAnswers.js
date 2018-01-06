import * as actionTypes from 'constants/actionTypes';
import graphql          from 'lib/api/graphql';
import surveyAnswers    from 'graphQL/mutations/surveyAnswers.graphql';

export default {
  setAnswer: (surveyAnswerInput) => ({
    type    : actionTypes.SET_ANSWER,
    payload : surveyAnswerInput,
  }),

  saveAnswers: () => (dispatch, getState) => dispatch({
    type : actionTypes.SAVE_ANSWERS,
    payload : graphql(surveyAnswers, {
      answers : getState().getIn(['surveyAnswers', 'answers']),
    }),
  }),
};
