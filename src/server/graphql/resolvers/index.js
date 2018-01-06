import createHash               from './lib/createHash';
import createUser               from './mutations/createUser';
import getSurveyAnswers         from './queries/getSurveyAnswers';
import getSurveyQuestionChoices from './queries/getSurveyQuestionChoices';
import getSurveyQuestions       from './queries/getSurveyQuestions';
import getUsersByEmail          from './queries/getUsersByEmail';
import users                    from './data/users';

export default {
  Mutation: {
    login: (root, args) => {
      console.log(args);
    },

    register: (root, args) => new Promise((resolve, reject) => {
      getUsersByEmail(args.email).then((usersWithEmail) => {
        if (usersWithEmail.length > 0) {
          console.log('found a user and that is bad.');
          reject();
          return;
        }

        const hash = createHash(args.email, args.password);
        const userId = Buffer.from(`${Date.now()}:${args.email}`).toString('base64');

        resolve(
          createUser({
            active   : true,
            email    : args.email,
            id       : userId,
            password : hash,
            role     : 'customer',
          }),
        );
      });
    }),

    surveyAnswers: (root, args) => {
      console.log(args);
    },
  },

  Query: {
    surveyAnswers: () => getSurveyAnswers(),
    surveyQuestions: () => getSurveyQuestions(),
    users: () => users,
  },

  SurveyQuestion: {
    choices: (question) => {
      if (Array.isArray(question.choices)) return question.choices;
      return getSurveyQuestionChoices(question.id);
    },
  },
};
