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
      QuizQ : [],
      Answers : []
  };
}

// Fetch API
getQuizApi = async () => {

  const categoryNumber = 11;
  const difficulty = "easy";
  // const categoryNumber = e.target.elements.categoryNumber.value;
  // const difficulty = e.target.elements.difficulty.value;
  const apiCall = await fetch(`https://opentdb.com/api.php?amount=5&category=${categoryNumber}&difficulty=${difficulty}&type=multiple`);
  const data = await apiCall.json();
 
  // to get the whole data 
  this.setState({
    QuizQ : data.results,
    Answers : data.results[0].correct_answer,
    IncorrectAnswers : data.results[0].incorrect_answers
  
  });
  console.log(data);
}


getUserData= (userData) => {
  console.log("information from <UserInfor>", userData )


}


componentDidMount(){
  this.getQuizApi();
}



    render() {
      return (
        <div className="container">
          <UserInfo userData={this.getUserData}/>
          {this.state.QuizQ.map(questions => <Quiz questions={questions.question} answers={questions.correct_answer} incorrect={questions.incorrect_answers}/>)}
          <Score />
        </div>
      );
}

}

export default App;

// answers={questions.correct_answer}