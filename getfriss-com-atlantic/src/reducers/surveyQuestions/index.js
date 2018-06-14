import * as actionTypes from 'constants/actionTypes';
import createReducer    from 'reducers/createReducer';
import Immutable        from 'immutable';
import initialState     from './initialState';

export default createReducer(initialState, {
  [actionTypes.LOAD_SURVEY_PENDING]: state => state.set('areLoading', true),

  [actionTypes.LOAD_SURVEY_FULFILLED]: (state, { payload: { data } }) => state.merge({
    areLoading : false,
    loaded  : Immutable.fromJS(data.surveyQuestions),
  }),
});
