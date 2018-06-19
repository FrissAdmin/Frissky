import graphql from './graphql';

export default (query, variables) => graphql({
  headers : {
    'Content-Type'                      : 'application/json',
    'X-Shopify-Storefront-Access-Token' : '46794d7f69a3f9118b64a84928c25a3c',
  },
  query,
  url : 'https://friss-beauty.myshopify.com/api/graphql',
  variables,
});
