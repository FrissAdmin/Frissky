import getSurveyQuestionChoices from './helpers/queries/getSurveyQuestionChoices';

export default {
  choices: (question) => {
    if (Array.isArray(question.choices)) return question.choices;
    return getSurveyQuestionChoices(question.id);
  },
};
