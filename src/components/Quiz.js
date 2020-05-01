import styles from './Quiz.module.css';
import React from 'react';
import Score from'./Score'
import Question from './Question';


class Quiz extends React.Component {

  constructor(props){
    super(props)
  
    this.state ={
      playerScore: 0,
      questionsAnswered: 0,
      quizInstance: null
    }
  }

  updateScore= async (currentScore)=>{
    await this.setState({
      playerScore: this.state.playerScore+currentScore
    }) 

    let playerObj={
      score: this.state.playerScore,
      playerName: this.props.currentPlayer
    }

    this.props.score(playerObj)
    console.log("quiz instance player score", this.state.playerScore)
  }
  
  updateAnsweredQuestions= async (currentAnswered)=>{
    await this.setState({
      questionsAnswered: this.state.questionsAnswered+currentAnswered
    })

    this.props.answeredQuestions(this.state.questionsAnswered) 
  }

  refreshPage = () => {
    window.location.reload(false);
  }

  getQuizApi = async (userData) => {

    const categoryNumber = userData.category;
    const difficulty = userData.difficulty;


    // header('content-type:text/html;charset=utf-8');
    const apiCall = await fetch(`https://opentdb.com/api.php?amount=5&category=${categoryNumber}&difficulty=${difficulty}&type=multiple&dencode=base64`)
    
    const data = await apiCall.json();

    this.setState({
          quizInstance: data.results
    })
  } 


  componentDidMount =()=>{
    
    this.getQuizApi(this.props.playerInfo)
  
  }
  

  render() {
    let categoryName="PLACEHOLDER"

    return (
      this.state.quizInstance === null ? 
            <span className={styles.Bee}> We're BEEZZY loading {this.props.currentPlayer}'s quiz </span>  :

            <div className={styles.quizComponent}>
              
              <div className={styles.quizDeclaration}>
                {this.props.currentPlayer} you are being WHUIZZED on {this.props.playerInfo.categoryName}!

              </div>
              
              <div className="quizQuestionsMapped">
                {this.state.quizInstance.map((questionItem) => 
                  <Question 
                    questionData={questionItem} 
                    latestPoint={this.updateScore} 
                    answeredQuestions={this.updateAnsweredQuestions}/>)
                  }
              </div>
              
        
            
            </div>
          
    
        // <div className={styles.quizDiv}>
        // <h3 className={styles.question}>Question : {this.props.questions}</h3>

        // {/* // display answers - find a way to randomise and space the answers out in button form */}
        // <h3 className={styles.question}>Answer : {this.props.answers} {this.props.incorrect}</h3>
        // </div>
    )
  }
}


export default Quiz;
