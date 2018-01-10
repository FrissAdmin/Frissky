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
    nextQuestion         : PropTypes.func.isRequired,
    question             : appPropTypes.surveyQuestion,
    surveyAnswersActions : appPropTypes.actions,
  }

  static defaultProps = {
    answer : Immutable.Map({
      answer   : '',
      choice   : '',
      question : '',
    }),
  }

  state = {
    answerText : this.props.answer.get('answer'),
    choiceId   : this.props.answer.get('choice'),
  }

  nextQuestion = (event) => {
    event.preventDefault();
    this.saveAnswer();
    this.props.nextQuestion();
  }

  saveAnswer = () => {
    if (this.props.question.get('type') === 'text') {
      this.props.surveyAnswersActions.setAnswer({
        answer   : this.state.answerText,
        question : this.props.question.get('id'),
      });
    }

    if (this.props.question.get('type') === 'choice') {
      this.props.surveyAnswersActions.setAnswer({
        choice   : this.state.choiceId,
        question : this.props.question.get('id'),
      });
    }
  }

  handleTextInput = (event) => this.setState({ answerText : event.currentTarget.value })
  handleChoice = (event) => this.setState({ choiceId : event.currentTarget.value })

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
      <input
        className={ styles.Input }
        onChange={ this.handleTextInput }
        type="text"
        value={ this.state.answerText }
      />
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
              checked={ choice.get('id') === this.state.choiceId }
              className={ styles.ChoiceInput }
              id={ `question-${question.get('id')}-${slugify(choice.get('title'))}` }
              name={ `question-${question.get('id')}` }
              onChange={ this.handleChoice }
              type="radio"
              value={ choice.get('id') }
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
