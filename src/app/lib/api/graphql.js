import store from 'app/store';

const getToken = () => store.getState().getIn(['auth', 'token']);

const addTokenToVariables = (obj) => Object.assign(obj, { token : getToken() });

export default (query, variables) =>
  new Promise((resolve, reject) => fetch('/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query,
      variables : addTokenToVariables(variables),
    }),
  })
    .then((response) => {
      if (response.ok) {
        resolve(response.json());
      } else {
        console.log('Request failed status check: ', response);
        reject(response);
      }
    })
    .catch((error) => {
      console.log('Request failed: ', error);
      reject(error);
    }));
