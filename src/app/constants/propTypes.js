import ImmutablePropTypes from 'react-immutable-proptypes';
import PropTypes          from 'prop-types';

export const actions = PropTypes.objectOf(PropTypes.func);

export const surveyAnswer = ImmutablePropTypes.contains({
  answer     : PropTypes.string,
  choiceId   : PropTypes.string,
  questionId : PropTypes.string.isRequired,
});

export const surveyAnswers = ImmutablePropTypes.mapOf(surveyAnswer);

export const surveyAnswerState = ImmutablePropTypes.contains({
  answers : surveyAnswers,
  saved   : PropTypes.bool.isRequired,
});

export const surveyQuestionChoice = ImmutablePropTypes.contains({
  id    : PropTypes.string.isRequired,
  title : PropTypes.string.isRequired,
});

export const surveyQuestionChoices = ImmutablePropTypes.listOf(surveyQuestionChoice);

export const surveyQuestion = ImmutablePropTypes.contains({
  choices  : surveyQuestionChoices,
  id       : PropTypes.string.isRequired,
  subtitle : PropTypes.string,
  title    : PropTypes.string.isRequired,
  type     : PropTypes.string.isRequired,
});

export const surveyQuestions = ImmutablePropTypes.listOf(surveyQuestion);

export const surveyQuestionState = ImmutablePropTypes.contains({
  areLoading : PropTypes.bool.isRequired,
  questions  : surveyQuestions,
});
