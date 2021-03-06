import ImmutablePropTypes from 'react-immutable-proptypes';
import PropTypes          from 'prop-types';

export const actions = PropTypes.objectOf(PropTypes.func);

export const surveyAnswerKey = PropTypes.string;
export const surveyAnswer = PropTypes.string;

export const surveyAnswers = ImmutablePropTypes.mapOf(surveyAnswerKey, surveyAnswer);

export const surveyQuestionChoice = PropTypes.string;

export const surveyQuestionChoices = ImmutablePropTypes.listOf(surveyQuestionChoice);

export const surveyQuestion = ImmutablePropTypes.contains({
  choices  : surveyQuestionChoices,
  id       : PropTypes.number.isRequired,
  subtitle : PropTypes.string,
  title    : PropTypes.string.isRequired,
  type     : PropTypes.string.isRequired,
});

export const surveyQuestions = ImmutablePropTypes.listOf(surveyQuestion);

export const surveyState = ImmutablePropTypes.contains({
  answers   : surveyAnswers,
  isSaving  : PropTypes.bool,
  questions : surveyQuestions.isRequired,
});
