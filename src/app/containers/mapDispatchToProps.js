import { bindActionCreators } from 'redux';
import globalActionCreators   from '../actionCreators/global';

export default (dispatch) => ({
  globalActions : bindActionCreators(globalActionCreators, dispatch),
});
