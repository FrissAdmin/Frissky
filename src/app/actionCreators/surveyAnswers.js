import * as actionTypes from 'constants/actionTypes';
import graphql          from 'lib/api/graphql';
import store            from '../store';
import surveyAnswers    from 'graphQL/mutations/surveyAnswers.graphql';

export default {
  setAnswer: (surveyAnswerInput) => ({
    type    : actionTypes.SET_ANSWER,
    payload : surveyAnswerInput,
  }),

  saveAnswers: () => ({
    type : actionTypes.SAVE_ANSWERS,
    payload : graphql(surveyAnswers, {
      answers : Object.values(store.getState().getIn(['surveyAnswers', 'answers']).toJS()),
    }),
  }),
};
