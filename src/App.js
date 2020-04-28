import React from 'react';
import UserInfo from './components/UserInfo';
import Quiz from './components/Quiz';
import Score from './components/Score';
import QuizManager from './containers/QuizManager'


class App extends React.Component {

// states GetUsername, GetAPI, GetQuestions, GetAnswers, GetScore
constructor(props){
  super(props);
  this.state = {
      QuizQ : null,
      Answers : null,
      userName: null,
      difficulty: null,
      category: null
  };
}


getUserData = async (playerData) =>{
  let userNameArray = playerData.userName.split(',')
  console.log("username array", userNameArray)

  await this.setState({ // wait for user data to be set
    userName: playerData.userName.split(','),
    difficulty: playerData.difficulty,
    category: playerData.category
  })
  
  //then trigger the getQuiz api
  this.getQuizApi(this.state);
}


  //Fetch data from api
getQuizApi = async (userData) => {

    const categoryNumber = userData.category;
    const difficulty = userData.difficulty;

    const apiCall = await fetch(`https://opentdb.com/api.php?amount=5&category=${categoryNumber}&difficulty=${difficulty}&type=multiple`);
    const data = await apiCall.json();

    console.log(userData);
  
    // to get the whole data 
    this.setState({
      QuizQ:data.results
    });

}




render() {
      return (
        <div className="container">
          
        
        { this.state.QuizQ === null? 
          <UserInfo playerData={this.getUserData} /> : 
          <QuizManager quizData={this.state.QuizQ} playerInfo={this.state}/>



          // {/* </QuizManager> <Quiz quizData={this.state.QuizQ} playerInfo={this.state} />   */}
        }
        
    
        </div>
      );
    }

}

export default App;