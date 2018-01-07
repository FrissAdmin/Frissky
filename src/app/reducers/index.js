import { combineReducers } from 'redux-immutable';
import auth                from './auth';
import surveyAnswers       from './surveyAnswers';
import surveyQuestions     from './surveyQuestions';

export default combineReducers({
  auth,
  surveyAnswers,
  surveyQuestions,
});
