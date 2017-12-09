import PropTypes from 'prop-types';

export const question = PropTypes.shape({
  choices  : PropTypes.arrayOf(PropTypes.string),
  id       : PropTypes.number.isRequired,
  subtitle : PropTypes.string,
  title    : PropTypes.string.isRequired,
  type     : PropTypes.string,
});
