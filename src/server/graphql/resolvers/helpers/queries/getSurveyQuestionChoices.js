import wrapSQLInPromise from '../../lib/wrapSQLInPromise';

export default (surveyQuestionId) => wrapSQLInPromise(
  'SELECT id, title FROM survey_question_choices WHERE survey_question_id = $1',
  [surveyQuestionId],
);
