import * as appPropTypes        from '../../constants/propTypes';
import containerFactory         from '../../containers/factory';
import Question                 from './Question';
import React, { PureComponent } from 'react';
import styles                   from './styles';

export default containerFactory(class Survey extends PureComponent {
  static propTypes = {
    surveyAnswers        : appPropTypes.surveyAnswerState,
    surveyAnswersActions : appPropTypes.actions,
    surveyQuestions      : appPropTypes.surveyQuestionState,
  }

  state = {
    currentQuestion : 1,
  }

  getAnswer(question) {
    return this.props.surveyAnswers.getIn(['answers', question.get('id')]);
  }

  nextQuestion = () => this.setState({
    currentQuestion : Math.min(
      this.props.surveyQuestions.get('loaded').size + 1,
      this.state.currentQuestion + 1,
    ),
  })

  render() {
    return (
      <div className={ styles.Root }>
        <h1 className={ styles.Title }>Survey</h1>

        <ul className={ styles.Questions }>
          <For each="question" of={ this.props.surveyQuestions.get('loaded') }>
            <Question
              answer={ this.getAnswer(question) }
              isCurrent={ this.state.currentQuestion >= question.get('id').trim() }
              key={ `question-${question.get('id')}` }
              nextQuestion={ this.nextQuestion }
              question={ question }
              surveyAnswersActions={ this.props.surveyAnswersActions }
            />
          </For>
        </ul>
      </div>
    );
  }
});
