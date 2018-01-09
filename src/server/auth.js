import jwt from 'jsonwebtoken';

export const APP_SECRET = 'dolphincanvasfevercynic';

export default (request, response, next) => {
  request.user = {};

  if (request.header('Authorization')) {
    request.user = jwt.verify(request.header('Authorization'), APP_SECRET);
  }

  next();
};
