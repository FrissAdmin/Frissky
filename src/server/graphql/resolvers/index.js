import getConnection            from '../../db/getConnection';
import getSurveyQuestionChoices from './queries/getSurveyQuestionChoices';
import getSurveyQuestions       from './queries/getSurveyQuestions';
import users                    from './data/users';

export default {
  Query: {
    surveyQuestions: () => getSurveyQuestions(getConnection()),
    users: () => users,
  },

  SurveyQuestion: {
    choices: (question) => {
      if (Array.isArray(question.choices)) return question.choices;
      return getSurveyQuestionChoices(getConnection(), question.id);
    },
  },
};
