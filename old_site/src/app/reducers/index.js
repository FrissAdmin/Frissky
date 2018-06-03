import { combineReducers } from 'redux-immutable';
import auth                from './auth';
import messages            from './messages';
import surveyAnswers       from './surveyAnswers';
import surveyQuestions     from './surveyQuestions';
import users               from './users';

export default combineReducers({
  auth,
  messages,
  surveyAnswers,
  surveyQuestions,
  users,
});
