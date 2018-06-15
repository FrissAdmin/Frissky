import { bindActionCreators } from 'redux';
import surveyActionCreators   from 'actionCreators/survey';
import userActionCreators     from 'actionCreators/user';

export default (dispatch) => ({
  surveyActions : bindActionCreators(surveyActionCreators, dispatch),
  userActions   : bindActionCreators(userActionCreators, dispatch),
});
