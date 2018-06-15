import * as appPropTypes        from 'constants/propTypes';
import Immutable                from 'immutable';
import PropTypes                from 'prop-types';
import React, { PureComponent } from 'react';
import slugify                  from 'lib/slugify';
import styles                   from './styles';

export default class Question extends PureComponent {
  static propTypes = {
    answer               : appPropTypes.surveyAnswer,
    isCurrent            : PropTypes.bool,
    isVisible            : PropTypes.bool,
    nextQuestion         : PropTypes.func.isRequired,
    question             : appPropTypes.surveyQuestion,
    surveyActions : appPropTypes.actions,
  }

  static defaultProps = {
    answer : Immutable.Map({
      answer   : '',
      question : '',
    }),
  }

  state = {
    answer : this.props.answer.get('answer'),
  }

  nextQuestion = (event) => {
    event.preventDefault();
    this.saveAnswer();
    this.props.nextQuestion();
  }

  saveAnswer = () => this.props.surveyActions.setAnswer({
    answer     : this.state.answer,
    questionId : this.props.question.get('id'),
  })

  handleTextInput = (event) => this.setState({ answer : event.currentTarget.value })
  handleChoice = (event) => this.setState({ answer : event.currentTarget.value })

  getRootClasses = () => [
    styles.Root,
    (this.props.isCurrent ? styles.isCurrent : ''),
    (this.props.isVisible ? styles.isVisible : ''),
  ].join(' ')

  renderInput() {
    if (this.props.question.get('type') === 'text') return this.renderTextInput();
    if (this.props.question.get('type') === 'choice') return this.renderChoiceInput();
    return null;
  }

  renderTextInput() {
    return (
      <input
        className={ styles.Input }
        onChange={ this.handleTextInput }
        type="text"
        value={ this.state.answer }
      />
    );
  }

  renderChoiceInput() {
    const { question } = this.props;

    return (
      <div className={ styles.ChoiceGroup }>
        <For each="choice" of={ question.get('choices') }>
          <div
            className={ styles.ChoiceWrapper }
            key={ `question-${question.get('id')}-${slugify(choice)}` }
          >
            <input
              checked={ choice === this.state.answer }
              className={ styles.ChoiceInput }
              id={ `question-${question.get('id')}-${slugify(choice)}` }
              name={ `question-${question.get('id')}` }
              onChange={ this.handleChoice }
              type="radio"
              value={ choice }
            />

            <label
              className={ styles.Choice }
              htmlFor={ `question-${question.get('id')}-${slugify(choice)}` }
            >
              { choice }
            </label>
          </div>
        </For>
      </div>
    );
  }

  render() {
    const { question } = this.props;

    return (
      <div className={ this.getRootClasses() }>
        <h4 className={ styles.Title }>{ question.get('title') }</h4>

        <If condition={ question.get('subtitle') }>
          <h5 className={ styles.SubTitle }>{ question.get('subtitle') }</h5>
        </If>

        { this.renderInput() }

        <button className={ styles.SaveButton } onClick={ this.nextQuestion }>Next</button>
      </div>
    );
  }
}
