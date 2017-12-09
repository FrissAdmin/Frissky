import * as actionTypes from '../constants/actionTypes';

export default {
  loadQuestions: () => ({
    type    : actionTypes.LOAD_QUESTIONS,
    payload : new Promise().resolve(),
  }),
};
