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
      Answers : [],
      userName: null,
      difficulty: null,
      category: null
  };
}

// Fetch API
getQuizApi = async (userData) => {

  const categoryNumber = userData.category;
  const difficulty = userData.difficulty;
  const apiCall = await fetch(`https://opentdb.com/api.php?amount=5&category=${categoryNumber}&difficulty=${difficulty}&type=multiple`);
  const data = await apiCall.json();

  console.log(userData);
 
  // to get the whole data 
  this.setState({
    QuizQ : data.results
  
  });
  console.log(data);
}


getUserData =(userDataObj) =>{
  this.setState(
    userDataObj
  ) 
  // console.log("before update",this.state)
}

componentDidUpdate(){
  // console.log("after update",this.state)
}


formSubmitted = (state) => {
  this.setState({
      userName: state.username,
      difficulty: state.difficulty,
      category: state.category
  })
  console.log(state);
  this.getQuizApi(state);
  
}



    render() {
      return (
        <div className="container">
          <UserInfo userData={this.getUserData} onSubmit={this.formSubmitted}/>
          {this.state.QuizQ.map(questions => {
            const answers = [questions.correct_answer, ...questions.incorrect_answers]
            console.log(answers);
            return <Quiz questions={questions.question} answers={questions.correct_answer} incorrect={questions.incorrect_answers}/>
          })
          }
          <Score />
        </div>
      );
}

}

export default App;

// answers={questions.correct_answer}