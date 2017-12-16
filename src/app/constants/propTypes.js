import ImmutablePropTypes from 'react-immutable-proptypes';
import PropTypes          from 'prop-types';

export const choice = ImmutablePropTypes.contains({
  id    : PropTypes.string.isRequired,
  title : PropTypes.string.isRequired,
});

export const choices = ImmutablePropTypes.listOf(choice);

export const question = ImmutablePropTypes.contains({
  choices,
  id       : PropTypes.string.isRequired,
  subtitle : PropTypes.string,
  title    : PropTypes.string.isRequired,
  type     : PropTypes.string.isRequired,
});

export const questions = ImmutablePropTypes.listOf(question);

export const questionState = ImmutablePropTypes.contains({
  areLoading : PropTypes.bool.isRequired,
  questions,
});
