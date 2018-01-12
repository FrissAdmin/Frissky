import * as actionTypes            from 'constants/actionTypes';
import createReducer               from 'reducers/createReducer';
import Immutable                   from 'immutable';
import initialState                from './initialState';
import store                       from 'app/store';
import surveyAnswersActionCreators from 'actionCreators/surveyAnswers';

const reduceToAnswerMap = (answerMap, answer) => {
  answerMap[answer.question] = answer;
  return answerMap;
};

export default createReducer(initialState, {
  [actionTypes.LOAD_SURVEY_FULFILLED]: (state, { payload: { data } }) => state.merge({
    answers : Immutable.fromJS(data.surveyAnswers.reduce(reduceToAnswerMap, {})),
  }),

  [actionTypes.LOGIN_FULFILLED]: (state, { payload: { data: { login } } }) => {
    if (!state.get('saveAfterLogin') || login.error) return state;

    store.dispatch(surveyAnswersActionCreators.saveAnswers());

    return state.set('saveAfterLogin', false);
  },

  [actionTypes.SET_ANSWER]: (state, { payload }) =>
    state.setIn(['answers', payload.question], Immutable.fromJS(payload)),

  [actionTypes.SAVE_ANSWERS_FULFILLED]: state => state.set('saved', true),

  [actionTypes.SET_SAVE_ANSWERS_AFTER_LOGIN]: state => state.set('saveAfterLogin', true),
});
