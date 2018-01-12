import * as routes from 'constants/routes';

export default (user) => {
  if (user.get('role') === 'admin') return routes.USER_LIST;
  return routes.SURVEY;
};
