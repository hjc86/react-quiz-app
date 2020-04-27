import React from 'react';
import UserInfo from './components/UserInfo';
import Quiz from './components/Quiz';
import Score from './components/Score';
import './App.css';


class App extends React.Component {

// states GetUsername, GetAPI, GetQuestions, GetAnswers, GetScore
constructor(props){
  super(props);
  this.state = {
      QuizQ : []
  };
}

// Fetch API
getQuizApi = async () => {

  const categoryNumber = 11;
  const difficulty = "easy";
  // const categoryNumber = e.target.elements.city.value;
  // const difficulty = e.target.elements.country.value;
  const apiCall = await fetch(`https://opentdb.com/api.php?amount=5&category=${categoryNumber}&difficulty=${difficulty}&type=multiple`);
  const data = await apiCall.json();
 
  // to get the whole data 
  this.setState({QuizQ : data.results});
  console.log(data);
}


componentDidMount(){
  this.getQuizApi();
}


    render() {
      return (
        <div className="container">
          <UserInfo />

          {this.state.QuizQ.map(questions => <Quiz questions={questions.question} />)}
          <Score />
        </div>
      );
}
}

export default App;

