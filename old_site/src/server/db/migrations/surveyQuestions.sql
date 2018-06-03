CREATE TABLE survey_questions(
  id VARCHAR(50) NOT NULL,
  title TEXT NOT NULL,
  subtitle TEXT NULL,
  type VARCHAR(50) NOT NULL,
  active boolean NOT NULL DEFAULT FALSE,
  created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  modified TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT survey_questions_pk PRIMARY KEY(id)
);

INSERT INTO survey_questions (id, subtitle, title, type, active, created, modified)
VALUES
('1', '', 'We’re excited to meet you! What’s your first name?', 'text', TRUE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP ),
('2', 'Choose any that apply', 'Do you love your current skincare routine?', 'choice', TRUE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP ),
('3', '', 'Do you like to experiment with new skin care?', 'choice', TRUE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP ),
('4', '', 'What types of skin care products do you love to use the most?', 'choice', TRUE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP ),
('5', '', 'How would you describe your skin tone?', 'choice', TRUE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP ),
('6', '', 'What type of environment do you live in?', 'choice', TRUE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP ),
('7', '', 'How would you describe your skin type?', 'choice', TRUE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP ),
('8', '', 'What are your skin concerns?', 'choice', TRUE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP ),
('9', '', 'Do you often struggle with your skin?', 'choice', TRUE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP ),
('10', '', 'UV light is the #1 cause in premature aging, do you diligently wear sunscreen?', 'choice', TRUE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP ),
('11', '', 'Do you have any sensitivities to ingredients or fragrance?', 'choice', TRUE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP ),
('12', '', 'Where do you usually shop for beauty products?', 'choice', TRUE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP ),
('13', '', 'Are you currently seeing a Dermatologist or Esthetician?', 'choice', TRUE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP ),
('14', '', 'What type of skin care routine are you looking for?', 'choice', TRUE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP ),
('15', '', 'Age helps us understand what products would be best for you! What age group do you fall under?', 'choice', TRUE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP ),
('16', '', 'What’s the monthly budget you’re willing to invest in a new skin care routine?', 'choice', TRUE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP );
