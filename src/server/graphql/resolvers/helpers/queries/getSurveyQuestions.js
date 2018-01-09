import wrapSQLInPromise from '../../lib/wrapSQLInPromise';

export default () => wrapSQLInPromise(
  'SELECT id, title, subtitle, type FROM survey_questions WHERE active',
  [],
);
