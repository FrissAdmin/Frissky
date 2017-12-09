import * as propTypes           from '../../../constants/propTypes';
import PropTypes                from 'prop-types';
import React, { PureComponent } from 'react';
import slugify                  from '../../../lib/slugify';
import styles                   from './styles';

export default class Question extends PureComponent {
  static propTypes = {
    isCurrent    : PropTypes.bool,
    nextQuestion : PropTypes.func.isRequired,
    question     : propTypes.question,
  }

  getChoiceGroupClasses = () => [
    styles.ChoiceGroup,
    (this.props.isVisible ? styles.isCurrent : ''),
  ].join('')

  getRootClasses = () => [
    styles.Root,
    (this.props.isCurrent ? styles.isCurrent : ''),
  ].join('')

  renderInput() {
    if (this.props.question.type === 'text') return this.renderTextInput();
    if (this.props.question.type === 'choice') return this.renderChoiceInput();
  }

  renderTextInput() {
    return (
      <input type="text" />
    );
  }

  renderChoiceInput() {
    const {
      id,
      choices,
    } = this.props.question;

    return (
      <div className={ this.getChoiceGroupClasses() }>
        <For each="choice" of={ choices }>
          <div className={ styles.ChoiceWrapper } key={ `question-${id}-${slugify(choice)}` }>
            <input
              className={ styles.ChoiceInput }
              id={ `question-${id}-${slugify(choice)}` }
              name={ `question-${id}` }
              value={ choice }
              type="radio"
            />

            <label
              className={ styles.Choice }
              htmlFor={ `question-${id}-${slugify(choice)}` }
            >
              { choice }
            </label>
          </div>
        </For>
      </div>
    );
  }

  render() {
    const {
      id,
      subtitle,
      title,
      type,
    } = this.props.question;

    return (
      <li className={ this.getRootClasses() }>
        <h4 className={ styles.Title }>{ title }</h4>

        <If condition={ subtitle }>
          <h5 className={ styles.SubTitle }>{ subtitle }</h5>
        </If>

        { this.renderInput() }
      </li>
    );
  }
}
