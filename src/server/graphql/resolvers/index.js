import * as authUtils           from './lib/authUtils';
import createHash               from './lib/createHash';
import createUser               from './mutations/createUser';
import getSurveyAnswers         from './queries/getSurveyAnswers';
import getSurveyQuestionChoices from './queries/getSurveyQuestionChoices';
import getSurveyQuestions       from './queries/getSurveyQuestions';
import getUsersByEmail          from './queries/getUsersByEmail';
import jwt                      from 'jsonwebtoken';
import users                    from './data/users';

export default {
  Mutation: {
    login: (root, args) => {
      console.log(args);
    },

    mutationRoleCustomer: (root, args) => authUtils.validateTokenAndRole(args.token, 'customer'),

    register: (root, args) => new Promise((resolve, reject) => {
      getUsersByEmail(args.email).then((usersWithEmail) => {
        if (usersWithEmail.length > 0) {
          console.log('found a user and that is bad.');
          reject();
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
              id   : userId,
              role : 'customer',
            }),
          }))
          .catch((error) => resolve({ error }));
      });
    }),
  },

  MutationRoleCustomer: {
    surveyAnswers: (root, args) => {
      console.log(args);
    },
  },

  Query: {
    queryRoleAdmin: (root, args) => authUtils.validateTokenAndRole(args.token, 'admin'),
    queryRoleCustomer: (root, args) => authUtils.validateTokenAndRole(args.token, 'admin'),

    surveyQuestions: () => getSurveyQuestions(),
  },

  QueryRoleCustomer: {
    surveyAnswers: (user) => getSurveyAnswers(user.id),
  },

  QueryRoleAdmin: {
    users: () => users,
  },

  SurveyQuestion: {
    choices: (question) => {
      if (Array.isArray(question.choices)) return question.choices;
      return getSurveyQuestionChoices(question.id);
    },
  },
};
