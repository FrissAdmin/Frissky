import Immutable from 'immutable';

const token = window.localStorage.getItem('friss_app_token');

export default Immutable.fromJS({
  isLoggedIn : token !== undefined,
  token,
  user       : null,
});
