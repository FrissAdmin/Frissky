import jwt from 'jsonwebtoken';

const APP_SECRET = 'dolphincanvasfevercynic';
const ADMIN = 'admin';
const CUSTOMER = 'customer';

const validateRole = (requestedRole, hasRole) => {
  switch (requestedRole) {
    case ADMIN:
      return ADMIN === hasRole;

    case CUSTOMER:
      return [ADMIN, CUSTOMER].includes(hasRole);

    default:
      return true;
  }
};

export const validateTokenAndRole = (token, role) => {
  const user = jwt.verify(token, APP_SECRET);
  if (!validateRole(role, user.role)) return null;

  return user;
};

export const signToken = (userObj) => jwt.sign(userObj, APP_SECRET);
