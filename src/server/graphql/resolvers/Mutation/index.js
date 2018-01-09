import * as authUtils              from '../lib/authUtils';
import createHash, { compareHash } from '../lib/createHash';
import createUser                  from '../helpers/mutations/createUser';
import getUsersByEmail             from '../helpers/queries/getUsersByEmail';
import setSurveyAnswers            from '../helpers/mutations/setSurveyAnswers';

export default {
  login: (root, args) => new Promise((resolve) => {
    getUsersByEmail(args.email, true).then((usersWithEmail) => {
      if (usersWithEmail.length < 1) {
        resolve({ error: 'No user with that email exists.' });
        return;
      }

      if (usersWithEmail.length > 1) {
        resolve({ error: 'Too many users with that email exists.' });
        return;
      }

      const user = usersWithEmail[0];

      if (!compareHash(args.email, args.password, user)) {
        resolve({ error: 'That password is incorrect.' });
        return;
      }

      console.log({
        token : authUtils.signToken({
          email : user.email,
          id    : user.id,
          role  : user.role,
        }),
        user : {
          email : user.email,
          id    : user.id,
          role  : user.role,
        },
      });

      resolve({
        token : authUtils.signToken({
          email : user.email,
          id    : user.id,
          role  : user.role,
        }),
        user : {
          email : user.email,
          id    : user.id,
          role  : user.role,
        },
      });
    });
  }),

  register: (root, args) => new Promise((resolve) => {
    getUsersByEmail(args.email).then((usersWithEmail) => {
      if (usersWithEmail.length > 0) {
        resolve({ error: 'A user with that email already exists.' });
        return;
      }

      const hash = createHash(args.email, args.password);
      const userId = Buffer.from(`${Date.now()}:${args.email}`).toString('base64');

      createUser({
        active   : true,
        email    : args.email,
        id       : userId,
        password : hash,
        role     : 'customer',
      })
        .then(() => resolve({
          token : authUtils.signToken({
            email : args.email,
            id    : userId,
            role  : 'customer',
          }),
          user : {
            email : args.email,
            id    : userId,
            role  : 'customer',
          },
        }))
        .catch((error) => resolve({ error }));
    });
  }),

  surveyAnswers: (root, args, context) => {
    authUtils.requireCustomer(context.user);
    return setSurveyAnswers(args.answers, context.user.id);
  },
};
