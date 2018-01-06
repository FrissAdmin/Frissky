import { bindActionCreators }      from 'redux';
import globalActionCreators        from '../actionCreators/global';
import surveyAnswersActionCreators from '../actionCreators/surveyAnswers';

export default (dispatch) => ({
  globalActions        : bindActionCreators(globalActionCreators, dispatch),
  surveyAnswersActions : bindActionCreators(surveyAnswersActionCreators, dispatch),
});
