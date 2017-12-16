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

  nextQuestion = (event) => {
    event.preventDefault();
    this.props.nextQuestion();
  }

  getChoiceGroupClasses = () => [
    styles.ChoiceGroup,
    (this.props.isVisible ? styles.isCurrent : ''),
  ].join(' ')

  getRootClasses = () => [
    styles.Root,
    (this.props.isCurrent ? styles.isCurrent : ''),
  ].join(' ')

  renderInput() {
    if (this.props.question.get('type') === 'text') return this.renderTextInput();
    if (this.props.question.get('type') === 'choice') return this.renderChoiceInput();
    return null;
  }

  renderTextInput() {
    return (
      <input className={ styles.Input } type="text" />
    );
  }

  renderChoiceInput() {
    const { question } = this.props;

    return (
      <div className={ this.getChoiceGroupClasses() }>
        <For each="choice" of={ question.get('choices') }>
          <div
            className={ styles.ChoiceWrapper }
            key={ `question-${question.get('id')}-${slugify(choice.get('title'))}` }
          >
            <input
              className={ styles.ChoiceInput }
              id={ `question-${question.get('id')}-${slugify(choice.get('title'))}` }
              name={ `question-${question.get('id')}` }
              type="radio"
              value={ choice }
            />

            <label
              className={ styles.Choice }
              htmlFor={ `question-${question.get('id')}-${slugify(choice.get('title'))}` }
            >
              { choice.get('title') }
            </label>
          </div>
        </For>
      </div>
    );
  }

  render() {
    const { question } = this.props;

    return (
      <li className={ this.getRootClasses() }>
        <h4 className={ styles.Title }>{ question.get('title') }</h4>

        <If condition={ question.get('subtitle') }>
          <h5 className={ styles.SubTitle }>{ question.get('subtitle') }</h5>
        </If>

        { this.renderInput() }

        <button className={ styles.SaveButton } onClick={ this.nextQuestion }>Next</button>
      </li>
    );
  }
}
