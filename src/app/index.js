import App                  from './components/App';
import globalActionCreators from './actionCreators/global';
import React                from 'react';
import ReactDOM             from 'react-dom';
import store                from './store';

store.dispatch(globalActionCreators.loadQuestions());

ReactDOM.render(<App />, document.getElementById('react-root'));
