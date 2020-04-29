import React, { Component } from 'react'
import Quiz from '../components/Quiz'

class QuizManager extends Component {
    constructor(props){
        super(props)
        
        this.state={
            //currentPlayer: null,
            questionsAnswered: 0,
            playerIndex: 0,
            finished: false
        }


    }
    
    
    updateAnsweredQuestions=(questionsAnswered)=>{
        console.log("quizmanger answered qs", questionsAnswered )
        this.setState({
            questionsAnswered: questionsAnswered
        })

        if(this.state.questionsAnswered===5){
            this.setState({
                playerIndex: this.state.playerIndex+1,
                questionsAnswered: 0
            })
        }

    }

    checkFinished(){
        
    }


    render() {

        console.log("qm questions anserewd", this.state.questionsAnswered)
        
       console.log("index", this.state.playerIndex)
        
        return (

   <div>

          
       {this.state.questionsAnswered === 5 ? 
            
             null:
             <Quiz quizData={this.props.quizData} 
                    playerInfo={this.props.playerInfo} 
                    currentPlayer={this.props.playerInfo.userName[this.state.playerIndex]} 
                    answeredQuestions={this.updateAnsweredQuestions} 
                    isFinished={this.checkFinished}/>
    
       }

    
    </div>
        
        
        
        
        )
    }
}


export default QuizManager