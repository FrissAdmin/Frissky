import wrapSQLInPromise from '../../lib/wrapSQLInPromise';

export default (surveyAnswers, userId) => {
  const values = [];
  const params = [];

  surveyAnswers.forEach((answer, index) => {
    values.push(`(
      $${(index * 4) + 1},
      $${(index * 4) + 2},
      $${(index * 4) + 3},
      $${(index * 4) + 4}
    )`);
    params.push(answer.question);
    params.push(userId);
    params.push(answer.answer);
    params.push(answer.choice);
  });

  return wrapSQLInPromise(
    `
    INSERT INTO survey_answers( survey_question_id, user_id, answer, survey_question_choice_id )
    VALUES ${values.join(', ')}
    ON CONFLICT (survey_question_id, user_id)
    DO UPDATE SET
      answer = EXCLUDED.answer,
      survey_question_choice_id = EXCLUDED.survey_question_choice_id
    `,
    params,
  ).then((rows) => rows.length > 0);
};
