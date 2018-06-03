import * as authUtils     from '../lib/authUtils';
import getActiveUsers     from '../helpers/queries/getActiveUsers';
import getChannels        from '../helpers/queries/getChannels';
import getMessages        from '../helpers/queries/getMessages';
import getSurveyAnswers   from '../helpers/queries/getSurveyAnswers';
import getSurveyQuestions from '../helpers/queries/getSurveyQuestions';

export default {
  authData: (root, args, context) => context.user,

  channels: (root, args, context) => {
    authUtils.requireCustomer(context.user);
    return getChannels(context.user.id);
  },

  messages: (root, args, context) => {
    authUtils.requireCustomer(context.user);
    return getMessages(args.channel, context.user.id, args.afterTime);
  },

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
