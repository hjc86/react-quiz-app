import React from 'react';
import UserInfo from './components/UserInfo';
import QuizManager from './containers/QuizManager'

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
        userName: null,
        difficulty: null,
        category: null,
        categoryName: null
    };
  }

  getUserData = async (playerData) =>{

   await this.setState({
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