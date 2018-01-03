export default (query, variables) =>
  new Promise((resolve, reject) => fetch('/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  })
    .then((response) => {
      console.log('response', response);
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
