import wrapSQLInPromise from '../../lib/wrapSQLInPromise';

export default (userId) => wrapSQLInPromise(
  `SELECT survey_question_id, answer, survey_question_choice_id
  FROM survey_answers
  WHERE user_id = $1`,
  [userId],
);
