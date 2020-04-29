//import styles from './Quiz.module.css';
import React from 'react';
import Score from'./Score'
import QuizManager from '../containers/QuizManager';
import Question from './Question';



class Quiz extends React.Component {

  constructor(props){
    super(props)
  
    this.state ={
      playerScore: 0,
      questionsAnswered: 0
      
    }


  }

  updateScore=(currentScore)=>{
    console.log("is number",Number.isInteger(currentScore))
    console.log("player score", this.state.playerScore)
    console.log("player score update",this.state.playerScore+currentScore)
    this.setState({
      playerScore: this.state.playerScore+currentScore
      
    }) 
  }
  
  updateAnsweredQuestions= async (currentAnswered)=>{
    await this.setState({
      questionsAnswered: this.state.questionsAnswered+currentAnswered
      
    })

    this.props.answeredQuestions(this.state.questionsAnswered) 

  }

  render() {
    
    //  console.log(this.props.quizData)


    // console.log("current player in quiz ocmponent", this.props.currentPlayer)
    // console.log("answered questions", this.state.questionsAnswered)
      
    
    return (
        
        <div>
      
        {this.props.currentPlayer}
        {this.props.quizData.map((questionItem) => <Question questionData={questionItem} latestPoint={this.updateScore} answeredQuestions={this.updateAnsweredQuestions}/>)}



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
