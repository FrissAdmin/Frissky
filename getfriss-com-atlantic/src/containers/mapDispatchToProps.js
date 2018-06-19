import { bindActionCreators } from 'redux';
import surveyActionCreators   from 'actionCreators/survey';

export default (dispatch) => ({
  surveyActions : bindActionCreators(surveyActionCreators, dispatch),
});
