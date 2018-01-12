export default (state) => ({
  auth            : state.get('auth'),
  surveyAnswers   : state.get('surveyAnswers'),
  surveyQuestions : state.get('surveyQuestions'),
  users           : state.get('users'),
});
