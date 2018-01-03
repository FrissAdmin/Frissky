import wrapQueryInPromise from './wrapQueryInPromise';

export default (connectionPromise, surveyQuestionId) => wrapQueryInPromise(
  connectionPromise,
  'SELECT id, title FROM survey_question_choices WHERE survey_question_id = $1',
  [surveyQuestionId],
);
