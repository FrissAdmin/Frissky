export default (state) => ({
  auth            : state.get('auth'),
  messages        : state.get('messages'),
  surveyAnswers   : state.get('surveyAnswers'),
  surveyQuestions : state.get('surveyQuestions'),
  users           : state.get('users'),
});
