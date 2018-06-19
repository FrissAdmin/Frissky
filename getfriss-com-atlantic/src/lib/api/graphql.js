const fetchSettings = {
  method   : 'POST',
  mode     : 'cors',
  redirect : 'follow',
};

export default ({
  headers,
  query,
  url,
  variables,
}) =>
  new Promise((resolve, reject) => fetch(url, {
    ...fetchSettings,

    headers,

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
