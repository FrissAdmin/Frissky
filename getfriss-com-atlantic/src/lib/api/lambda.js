import graphql from './graphql';

export default (query, variables) => graphql({
  headers : {
    'Content-Type' : 'application/json',
    'X-Api-Key'    : 'WcrTH2S0nR96uQ9hch7Gr7UwK0yW3T4A41HPuV0G',
  },
  query,
  url : 'https://g4oony290b.execute-api.us-west-2.amazonaws.com/production/metafields-proxy-production-createMetaFields',
  variables,
});
