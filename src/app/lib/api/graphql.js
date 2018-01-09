import store from 'app/store';

const getToken = () => store.getState().getIn(['auth', 'token']);

export default (query, variables) =>
  new Promise((resolve, reject) => fetch('/graphql', {
    method: 'POST',
    headers: {
      'Content-Type' : 'application/json',
      Accepts        : 'application/json',
      Authorization  : getToken(),
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
