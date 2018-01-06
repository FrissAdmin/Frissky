import wrapQueryInPromise from './wrapQueryInPromise';

export default (connectionPromise) => wrapQueryInPromise(
  connectionPromise,
  `SELECT id, survey_question_id AS questionId, answer, survey_question_choice_id AS choiceId
  FROM survey_answers`,
  [],
);
