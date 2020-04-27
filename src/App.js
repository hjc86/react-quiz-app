import React from 'react';
import UserInfo from './components/UserInfo';
import Quiz from './components/Quiz';
import Score from './components/Score';
import './App.css';


class App extends React.Component {



// states GetUsername, GetAPI, GetQuestions, GetAnswers, GetScore

// GetAPI function

// GetQuestions function

// GetAnswers function

// GetScore function
render() {
  return (
    <div className="container">
      <UserInfo />
      <Quiz />
      <Score />
    </div>
  );
}
}

export default App;
