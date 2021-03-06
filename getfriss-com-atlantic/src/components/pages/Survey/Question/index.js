import * as appPropTypes        from 'constants/propTypes';
import PropTypes                from 'prop-types';
import React, { PureComponent } from 'react';
import slugify                  from 'lib/slugify';
import styles                   from './styles';

export default class Question extends PureComponent {
  static propTypes = {
    answer         : appPropTypes.surveyAnswer,
    isLastQuestion : PropTypes.bool,
    nextQuestion   : PropTypes.func.isRequired,
    question       : appPropTypes.surveyQuestion,
    surveyActions  : appPropTypes.actions,
  }

  static defaultProps = {
    answer : null,
  }

  constructor(props) {
    super(props);

    this.state = {
      answer : this.getInitialAnswer(props.question, props.answer),
    };
  }

  isMultipleChoice = (question) =>
    question.get('type') === 'choice' &&
    question.get('allowMultipleChoices') === true

  getInitialAnswer(question, answer) {
    if (this.isMultipleChoice(question)) {
      if (typeof answer === 'string') return answer.split('|');
      return [];
    }

    return answer || '';
  }

  isChecked(choice) {
    if (!this.isMultipleChoice(this.props.question)) return this.state.answer === choice;
    return this.state.answer.findIndex(a => a === choice) > -1;
  }

  nextQuestion = (event) => {
    event.preventDefault();
    this.saveAnswer(this.state.answer);
    this.props.nextQuestion();
  }

  saveAnswer = (answer) => this.props.surveyActions.setAnswer({
    answer      : Array.isArray(answer) ? answer.join('|') : answer,
    questionKey : this.props.question.get('key'),
  })

  handleTextInput = ({ target: { value } }) => this.setState({ answer : value })
  handleTextKeyPress = (event) => (event.charCode === 13 ? this.nextQuestion(event) : false)

  handleChoice = ({ target : { value } }) => {
    if (this.isMultipleChoice(this.props.question)) {
      const index = this.state.answer.findIndex(a => a === value);
      const newAnswer = this.state.answer.slice(0);

      if (index === -1) newAnswer.push(value);
      if (index !== -1) newAnswer.splice(index, 1);

      return this.setState({ answer : newAnswer });
    }

    if (!this.props.isLastQuestion) {
      this.saveAnswer(value);
      return this.props.nextQuestion();
    }

    return this.setState({ answer : value });
  }

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
        onKeyPress={ this.handleTextKeyPress }
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
              checked={ this.isChecked(choice) }
              className={ styles.ChoiceInput }
              id={ `question-${question.get('id')}-${slugify(choice)}` }
              name={ `question-${question.get('id')}` }
              onChange={ this.handleChoice }
              type={ question.get('allowMultipleChoices') === true ? 'checkbox' : 'radio' }
              value={ choice }
            />

            <label
              className={ styles.Choice }
              htmlFor={ `question-${question.get('id')}-${slugify(choice)}` }
            >
              { choice }
            </label>

            <svg
              version="1.1"
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="
                M80.467,28.54
                c-1.562-1.562-4.096-1.562-5.658,0
                L40.868,62.48
                L27.194,48.806
                c-1.562-1.562-4.095-1.562-5.657,0
                c-1.562,1.562-1.562,4.095,0,5.657
                L38.04,70.966
                c0.781,0.781,1.805,1.172,2.829,1.172
                s2.047-0.391,2.829-1.172l36.77-36.769
                C82.028,32.634,82.028,30.102,80.467,28.54z
              " />
            </svg>
          </div>
        </For>
      </div>
    );
  }

  render() {
    const { question } = this.props;

    return (
      <div className={ styles.Root }>
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
