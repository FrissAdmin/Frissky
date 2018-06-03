export const CHANNELS    = '/messages';
export const LOGIN       = '/login';
export const MESSAGES    = '/messages/:channel_id';
export const REGISTER    = '/register';
export const SURVEY      = '/survey';
export const USER_DETAIL = '/admin/users/:id';
export const USER_LIST   = '/admin/users';

export const getRouteWithParams = (route, params) => {
  let finalRoute = route;

  Object.keys(params).forEach((key) => finalRoute = finalRoute.replace(`:${key}`, params[key]));

  return finalRoute;
};
