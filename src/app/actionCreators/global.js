import * as actionTypes from '../constants/actionTypes';
import graphql          from '../lib/api/graphql';
import surveyQuestions  from '../graphQL/queries/surveyQuestions.graphql';

export default {
  loadQuestions: () => ({
    type    : actionTypes.LOAD_QUESTIONS,
    payload : graphql(surveyQuestions, {}),
  }),
};
