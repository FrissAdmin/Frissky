import { bindActionCreators }      from 'redux';
import surveyAnswersActionCreators from 'actionCreators/surveyAnswers';

export default (dispatch) => ({
  surveyAnswersActions : bindActionCreators(surveyAnswersActionCreators, dispatch),
});
