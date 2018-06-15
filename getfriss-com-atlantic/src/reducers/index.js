import { combineReducers } from 'redux-immutable';
import survey              from './survey';
import user                from './user';

export default combineReducers({
  survey,
  user,
});
