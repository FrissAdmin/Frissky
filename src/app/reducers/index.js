import { combineReducers } from 'redux-immutable';
import surveyAnswers       from './surveyAnswers';
import surveyQuestions     from './surveyQuestions';

export default combineReducers({
  surveyAnswers,
  surveyQuestions,
});
