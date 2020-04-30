import React from 'react';
import UserInfo from './components/UserInfo';
import Quiz from './components/Quiz';
import Score from './components/Score';
import QuizManager from './containers/QuizManager'


// use token that expires but annoying
// get all question at the begining in APP.js, create logic to pick random selection
// or do seperate api calls for each quiz instance

//need to know:
  //a. number of players: 4 max
  //b. are there enough questions to do a quiz: one round is 5questions so need at least 20
  //c. if there arent enought say pick another category or play with less players  


class App extends React.Component {

// states GetUsername, GetAPI, GetQuestions, GetAnswers, GetScore
constructor(props){
  super(props);
  this.state = {
      //QuizQ : null,
      //Answers : null,
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
    category: playerData.category,
    categoryName: playerData.categoryName

  })
  
}


render() {
      return (
        <div className="container">
          
        { this.state.userName === null? 
          <UserInfo playerData={this.getUserData} /> : 
          <QuizManager playerInfo={this.state}/>
        }
        
        </div>
      );
    }

}

export default App;