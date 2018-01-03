import wrapQueryInPromise from './wrapQueryInPromise';

export default (connectionPromise) => wrapQueryInPromise(
  connectionPromise,
  'SELECT id, title, subtitle, type FROM survey_questions WHERE active',
  [],
);
