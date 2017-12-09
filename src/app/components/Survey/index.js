import containerFactory         from '../../containers/factory';
import Question                 from './Question';
import React, { PureComponent } from 'react';
import styles                   from './styles';
import surveyQuestions          from '../../constants/surveyQuestions';

export default containerFactory(class Survey extends PureComponent {
  state = {
    currentQuestion : 1,
  }

  nextQuestion = () => this.setState({
    currentQuestion : Math.min(surveyQuestions.length + 1, this.state.currentQuestion + 1),
  })

  render() {
    return (
      <div className={ styles.Root }>
        <h1 className={ styles.Title }>Survey</h1>

        <ul className={ styles.Questions }>
          <For each="question" of={ surveyQuestions }>
            <Question
              isCurrent={ this.state.currentQuestion === question.id }
              key={ `question-${question.id}` }
              nextQuestion={ this.nextQuestion }
              question={ question }
            />
          </For>
        </ul>
      </div>
    );
  }
});
