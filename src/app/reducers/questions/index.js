import * as actionTypes from '../../constants/actionTypes';
import createReducer    from '../createReducer';
import initialState     from './initialState';

export default createReducer(initialState, {
  [actionTypes.LOAD_QUESTIONS_PENDING]: state => state.set('areLoading', true),
});
