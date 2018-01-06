import * as actionTypes from 'constants/actionTypes';
import createReducer    from 'reducers/createReducer';
import Immutable        from 'immutable';
import initialState     from './initialState';

const reduceToAnswerMap = (answerMap, answer) => answerMap[answer.question] = answer;

export default createReducer(initialState, {
  [actionTypes.LOAD_SURVEY_FULFILLED]: (state, { payload: { data } }) => state.merge({
    answers : Immutable.fromJS(data.surveyAnswers.reduce(reduceToAnswerMap, {})),
  }),

  [actionTypes.SET_ANSWER]: (state, { payload }) =>
    state.setIn(['answers', payload.question], Immutable.fromJS(payload)),

  [actionTypes.SAVE_ANSWERS_FULFILLED]: state => state.set('saved', true),
});
