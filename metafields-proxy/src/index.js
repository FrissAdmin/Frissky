import graphql from 'graphql';
import schema  from './graphql/schema';


module.exports.createMetaFields = (event, context, callback) =>
  graphql(schema, event.queryStringParameters.query)
    .then(
      result => callback(null, { statusCode: 200, body: JSON.stringify(result) }),
      err => callback(err),
    );
