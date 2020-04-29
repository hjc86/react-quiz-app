import React, { Component } from 'react'
import Quiz from '../components/Quiz'

class QuizManager extends Component {
    constructor(props){
        super(props)
        
        this.state={
            //currentPlayer: null,
            questionsAnswered: 0,
            playerIndex: 0,
            finished: false,
            quizQA: null,
            score: 0,
            scoreArray: [],
            isFinished: false
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
    
    
    updateScore= (score)=>{
        console.log("quizmanger score", score)
        console.log("quiz manger score array", this.state.scoreArray)
        console.log("Player index",this.state.playerIndex)
        if(this.state.questionsAnswered === 4){

            this.setState({
                scoreArray: [...this.state.scoreArray, score],
                score: score    
             })
            

        }
        console.log()
        if(this.state.scoreArray.length===this.props.playerInfo.userName.length){
            this.setState({
                isFinished:true
            })
        } 
    }  

    render() {
        console.log("player score array in quiz manager",this.state.scoreArray)
        console.log("quiz finished" ,((this.state.questionsAnswered === 5) && (this.state.scoreArray.length===this.props.playerInfo.userName.length)))
        return (

            <div>
                
                {(this.state.questionsAnswered === 5)? 
                        
                        null:
                        <Quiz quizData={this.props.playerInfo} 
                        playerInfo={this.props.playerInfo} 
                        currentPlayer={this.props.playerInfo.userName[this.state.playerIndex]} 
                        answeredQuestions={this.updateAnsweredQuestions}
                        score={this.updateScore}
                        isFinished={this.state.checkFinished}/>
            
                }

                    
                  
           
                
            </div>
        
        
        
        
        )
    }
}


export default QuizManager