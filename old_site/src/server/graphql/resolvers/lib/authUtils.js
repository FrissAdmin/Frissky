import { APP_SECRET }   from '../../../auth';
import { GraphQLError } from 'graphql';
import jwt              from 'jsonwebtoken';

const ROLE_ADMIN = 'admin';
const ROLE_CUSTOMER = 'customer';

export const signToken = (userObj) => jwt.sign(userObj, APP_SECRET);

export const validateRole = ({ role: hasRole }, requestedRole) => {
  switch (requestedRole) {
    case ROLE_ADMIN:
      return ROLE_ADMIN === hasRole;

    case ROLE_CUSTOMER:
      return [ROLE_ADMIN, ROLE_CUSTOMER].includes(hasRole);

    default:
      return true;
  }
};

export const isCustomer = (user) => validateRole(user, ROLE_CUSTOMER);
export const isAdmin = (user) => validateRole(user, ROLE_ADMIN);

export const requireRole = (user, role) => {
  if (!validateRole(user, role)) {
    throw new GraphQLError('Not authorized.');
  }
};

export const requireCustomer = (user) => requireRole(user, ROLE_CUSTOMER);
export const requireAdmin = (user) => requireRole(user, ROLE_ADMIN);
