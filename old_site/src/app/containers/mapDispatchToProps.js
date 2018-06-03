import { bindActionCreators }      from 'redux';
import authActionCreators          from 'actionCreators/auth';
import globalActionCreators        from 'actionCreators/global';
import messagesActionCreators      from 'actionCreators/messages';
import surveyAnswersActionCreators from 'actionCreators/surveyAnswers';

export default (dispatch) => ({
  authActions          : bindActionCreators(authActionCreators, dispatch),
  globalActions        : bindActionCreators(globalActionCreators, dispatch),
  messagesActions      : bindActionCreators(messagesActionCreators, dispatch),
  surveyAnswersActions : bindActionCreators(surveyAnswersActionCreators, dispatch),
});
