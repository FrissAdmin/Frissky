import { CSSTransitionGroup }   from 'react-transition-group';
import * as appPropTypes        from 'constants/propTypes';
import containerFactory         from 'containers/factory';
import Question                 from './Question';
import React, { PureComponent } from 'react';
import styles                   from './styles';

const transitionDelay    = 200;
const transitionDuration = 400;
const transitionStagger  = 80;

const singleTransitionDuration = transitionDuration + (transitionStagger * 3);
const doubleTransitionDuration = (singleTransitionDuration * 2) + transitionDelay;

export default containerFactory(class Survey extends PureComponent {
  static propTypes = {
    survey        : appPropTypes.surveyState,
    surveyActions : appPropTypes.actions,
  }

  state = {
    currentQuestionIndex : 0,
  }

  isLastQuestion = () =>
    this.state.currentQuestionIndex === this.props.survey.get('questions').size - 1

  getCurrentQuestion = () => this.props.survey.getIn(['questions', this.state.currentQuestionIndex])

  getAnswer(question) {
    return this.props.survey.getIn(['answers', question.get('key')]);
  }

  nextQuestion = (event) => {
    if (this.isLastQuestion()) {
      return this.submitAnswers(event);
    }

    return this.setState({
      currentQuestionIndex : Math.min(
        this.props.survey.get('questions').size - 1,
        this.state.currentQuestionIndex + 1,
      ),
    });
  }

  submitAnswers = (event) => {
    if (event) event.preventDefault();
    this.props.surveyActions.saveAnswers();
  }

  render() {
    const question = this.getCurrentQuestion();

    return (
      <div className={ styles.Root }>
        <button onClick={ this.submitAnswers }>Submit Answers</button>

        <div className={ styles.Questions }>
          <CSSTransitionGroup
            component="div"
            transitionAppear
            transitionAppearTimeout={ singleTransitionDuration }
            transitionEnterTimeout={ doubleTransitionDuration }
            transitionLeaveTimeout={ singleTransitionDuration }
            transitionName={{
              appear       : 'css-transition-appear',
              appearActive : 'css-transition-appearActive',
              enter        : 'css-transition-enter',
              enterActive  : 'css-transition-enterActive',
              leave        : 'css-transition-leave',
              leaveActive  : 'css-transition-leaveActive',
            }}
          >
            <Question
              answer={ this.getAnswer(question) }
              isLastQuestion={ this.isLastQuestion() }
              key={ `question-${question.get('id')}` }
              nextQuestion={ this.nextQuestion }
              question={ question }
              surveyActions={ this.props.surveyActions }
            />
          </CSSTransitionGroup>
        </div>
      </div>
    );
  }
});
