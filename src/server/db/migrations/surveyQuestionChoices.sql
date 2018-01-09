CREATE TABLE survey_question_choices (
  id VARCHAR(50) NOT NULL,
  survey_question_id VARCHAR(50) NOT NULL,
  title TEXT NOT NULL,
  created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  modified TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT survey_question_choices_pk PRIMARY KEY(id)
);

INSERT INTO survey_question_choices (id, survey_question_id, title)
VALUES
('1', '2', 'I love it! I wouldn’t change much of it' ),
('2', '2', 'It’s ok, some products are working, some aren’t' ),
('3', '2', 'Not at all! Nothing seems to work for me.' ),
('4', '3', 'Yes! I try new products all of the time' ),
('5', '3', 'Sometimes, when products don’t work' ),
('6', '3', 'Rarely, I like the products I use' ),
('7', '4', 'Cleansers' ),
('8', '4', 'Cleansing oils' ),
('9', '4', 'Sheet masks' ),
('10', '4', 'Wash off masks' ),
('11', '4', 'Exfoliators' ),
('12', '4', 'Serums' ),
('13', '4', 'Face oils' ),
('14', '4', 'Toners and Mists' ),
('15', '4', 'Eye treatments' ),
('16', '4', 'Anti-aging treatments' ),
('17', '4', 'Peels' ),
('18', '4', 'Acne treatments' ),
('19', '4', 'Other - tell us more!' ),
('20', '5', 'Very fair' );

INSERT INTO survey_question_choices (id, survey_question_id, title)
VALUES
('21', '5', 'Fair' ),
('22', '5', 'Medium' ),
('23', '5', 'Medium-Olive' ),
('24', '5', 'Dark' ),
('25', '5', 'Very Dark' ),
('26', '6', 'The weather is humid' ),
('27', '6', 'The weather is dry' ),
('28', '6', 'Neither humid or dry' ),
('29', '7', 'Oily, I produce oil all over, including my t-zone' ),
('30', '7', 'Normal, neither very oily or very dry' ),
('31', '7', 'Dry, I produce little to no oil' ),
('32', '7', 'Combination, I’m dry in some areas, and oily in others' ),
('33', '8', 'Redness' ),
('34', '8', 'Fine lines & wrinkles' ),
('35', '8', 'Oiliness & large pores' ),
('36', '8', 'Acne & blemishes' ),
('37', '8', 'Dryness & dehydration' ),
('38', '8', 'Hyperpigmentation' ),
('39', '8', 'Other - tell us more' );

INSERT INTO survey_question_choices (id, survey_question_id, title)
VALUES
('40', '9', 'No, just interested in trying new products' ),
('41', '9', 'Recently, in the last month' ),
('42', '9', 'A while, 3-6 months' ),
('43', '9', 'Seems like forever! Over a year.' ),
('44', '10', 'Never' ),
('45', '10', 'Rarely' ),
('46', '10', 'Sometimes' ),
('47', '10', 'Often' ),
('48', '10', 'Always' ),
('49', '11', 'No, not that I’m aware of' ),
('50', '11', 'Yes, I’m often sensitive to products, but I’m not sure why' ),
('51', '11', 'Yes, I have a sensitivity to fragrance' ),
('52', '11', 'Yes, I have other sensitivities' ),
('53', '12', 'Sephora' ),
('54', '12', 'ULTA' ),
('55', '12', 'Target' ),
('56', '12', 'Prestige Retailers: Neiman Marcus, Net-A-Porter' ),
('57', '12', 'Department Stores: Nordstrom, Macy’s' ),
('58', '12', 'Online Retailers: DermStore, SkinStore, Amazon' ),
('59', '12', 'TV: QVC, HSN' );

INSERT INTO survey_question_choices (id, survey_question_id, title)
VALUES
('60', '12', 'Dermatologist' ),
('61', '12', 'Esthetician' ),
('62', '13', 'Yes, Dermatologist ' ),
('63', '13', 'Yes, Esthetician ' ),
('64', '13', 'Yes, Both' ),
('65', '13', 'No, I’m not getting treated by either' ),
('66', '14', 'Basic, just 1 or 2 products that will help with specific concerns.' ),
('67', '14', 'Essentials, I prefer a simple routine, but open to additional products that may enhance results.' ),
('68', '14', 'Complete, I want the best results and have the time to invest in all of the products that will help me!' ),
('69', '15', 'Under 18' ),
('70', '15', '19-29' ),
('71', '15', '30-39' ),
('72', '15', '40-59' ),
('73', '15', '60+' ),
('74', '16', '$50-$75' ),
('75', '16', '$75-$125' ),
('76', '16', '$125-$175' ),
('77', '16', '$175+' );
