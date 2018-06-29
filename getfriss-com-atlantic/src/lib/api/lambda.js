import graphql from './graphql';

export default (query, variables) => graphql({
  headers : {
    'Content-Type' : 'application/json',
    'x-api-key'    : 'oDl0NMcuoz0F7AAtoXkt9OvWQBCp7jJ4Dfwzt95f',
  },
  query,
  url : 'https://zga94twm74.execute-api.us-west-2.amazonaws.com/production/create',
  variables,
});
