const getAuthorizationHeader = () => ({
  'X-Shopify-Storefront-Access-Token' : '46794d7f69a3f9118b64a84928c25a3c',
});

const fetchSettings = {
  method   : 'POST',
  mode     : 'cors',
  redirect : 'follow',
};

export default (query, variables) =>
  new Promise((resolve, reject) => fetch('https://friss-beauty.myshopify.com/api/graphql', {
    ...fetchSettings,

    headers : {
      'Content-Type' : 'application/json',
      ...getAuthorizationHeader(),
    },
    body : JSON.stringify({
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
