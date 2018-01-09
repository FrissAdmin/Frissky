import * as authUtils     from '../lib/authUtils';
import getActiveUsers     from '../helpers/queries/getActiveUsers';
import getSurveyAnswers   from '../helpers/queries/getSurveyAnswers';
import getSurveyQuestions from '../helpers/queries/getSurveyQuestions';

export default {
  authData: (root, args, context) => context.user,

  surveyAnswers: (root, args, context) => {
    authUtils.requireCustomer(context.user);

    // Admins can override the user ID
    if (authUtils.isAdmin(context.user) && args.user) return getSurveyAnswers(args.user);

    return getSurveyAnswers(context.user.id);
  },

  surveyQuestions: () => getSurveyQuestions(),

  users: (root, args, context) => {
    authUtils.requireAdmin(context.user);
    return getActiveUsers();
  },
};
