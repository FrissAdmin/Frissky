import wrapSQLInPromise from '../lib/wrapSQLInPromise';

export default (userId) => wrapSQLInPromise(
  `SELECT id, survey_question_id AS questionId, answer, survey_question_choice_id AS choiceId
  FROM survey_answers
  WHERE user_id = $1`,
  [userId],
);
