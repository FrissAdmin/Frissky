import Immutable from 'immutable';

const token = window.localStorage.getItem('friss_app_token');

export default Immutable.fromJS({
  isLoading  : true,
  isLoaded   : false,
  isLoggedIn : typeof token === 'string' && token.length > 0,
  token,
  user       : null,
});
