const getAuthorizationHeader = () => ({
  'X-Shopify-Storefront-Access-Token' : '46794d7f69a3f9118b64a84928c25a3c',
});

export default (query, variables) =>
  new Promise((resolve, reject) => fetch('https://friss-beauty.myshopify.com/api/graphql', {
    method: 'POST',
    headers: {
      'Content-Type' : 'application/json',
      Accepts        : 'application/json',
      ...getAuthorizationHeader(),
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  })
    .then((response) => {
      if (!response.ok) {
        return reject(response);
      }

      const json = response.json();

      if (json.errors) {
        return reject(json);
      }

      return resolve(json);
    })
    .catch(reject));
