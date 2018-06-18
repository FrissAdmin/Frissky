import { graphql } from 'graphql';
import schema      from './graphql/schema';

export default (event, context, callback) => {
  try {
    const body = JSON.parse(event.body);

    return graphql(
      schema,
      body.query,
      null, // root value
      {}, // context
      body.variables || {},
    )
      .then(result => callback(null, {
        body       : JSON.stringify(result),
        statusCode : 200,
      }))
      .catch(error => callback(error));
  } catch (error) {
    return callback(error);
  }
};
