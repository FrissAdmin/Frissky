import * as appPropTypes        from '../../constants/propTypes';
import containerFactory         from '../../containers/factory';
import Question                 from './Question';
import React, { PureComponent } from 'react';
import styles                   from './styles';

export default containerFactory(class Survey extends PureComponent {
  static propTypes = {
    questions : appPropTypes.questionState,
  }

  state = {
    currentQuestion : 1,
  }

  nextQuestion = () => this.setState({
    currentQuestion : Math.min(
      this.props.questions.get('loaded').size + 1,
      this.state.currentQuestion + 1,
    ),
  })

  render() {
    return (
      <div className={ styles.Root }>
        <h1 className={ styles.Title }>Survey</h1>

        <ul className={ styles.Questions }>
          <For each="question" of={ this.props.questions.get('loaded') }>
            <Question
              isCurrent={ this.state.currentQuestion >= question.get('id') }
              key={ `question-${question.get('id')}` }
              nextQuestion={ this.nextQuestion }
              question={ question }
            />
          </For>
        </ul>
      </div>
    );
  }
});
