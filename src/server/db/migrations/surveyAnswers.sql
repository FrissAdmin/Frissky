CREATE TABLE survey_answers(
  survey_question_id CHAR(50) NOT NULL,
  user_id CHAR(50) NOT NULL,
  answer TEXT NULL,
  survey_question_choice_id CHAR(50) NULL,
  created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  modified TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY(survey_question_id, user_id)
);
