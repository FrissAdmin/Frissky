export default (connection, surveyQuestionId) => connection
  .then(client => client.query(`
    SELECT id, title
    FROM survey_question_choices
    WHERE survey_question_id = '${surveyQuestionId}'
  `).rows);
