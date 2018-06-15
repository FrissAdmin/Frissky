import Immutable       from 'immutable';
import surveyQuestions from 'constants/surveyQuestions';

export default Immutable.fromJS({
  answers   : {},
  isSaving  : false,
  questions : surveyQuestions,
});
