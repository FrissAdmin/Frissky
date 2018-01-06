import { bindActionCreators }      from 'redux';
import authActionCreators          from 'actionCreators/auth';
import globalActionCreators        from 'actionCreators/global';
import surveyAnswersActionCreators from 'actionCreators/surveyAnswers';

export default (dispatch) => ({
  authActions          : bindActionCreators(authActionCreators, dispatch),
  globalActions        : bindActionCreators(globalActionCreators, dispatch),
  surveyAnswersActions : bindActionCreators(surveyAnswersActionCreators, dispatch),
});
