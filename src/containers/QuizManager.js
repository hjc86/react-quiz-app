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
            carryOn: true
        }
        
    }
    
    updateAnsweredQuestions=(questionsAnswered)=>{
        console.log("quizmanger answered qs", questionsAnswered )
        this.setState({
            questionsAnswered: questionsAnswered
        })

        if(this.state.questionsAnswered===5 && this.state.playerIndex<this.props.playerInfo.userName.length-1){
            this.setState({
                playerIndex: this.state.playerIndex+1,
                questionsAnswered: 0
            })
        }
    }
    
    updateScore= (playerObj)=>{
        console.log("quizmanger score", playerObj.score)
        console.log("quiz manger score array", this.state.scoreArray)
        console.log("Player index",this.state.playerIndex)

        if(this.state.questionsAnswered === 4){
            this.setState({
                scoreArray: [...this.state.scoreArray, playerObj.score],
                score: playerObj.score   
             })
        }
    }  


    componentDidUpdate(){
        console.log("quiz master has updated")
    
    }

    render() {

        return (

            <div>
                        {this.state.questionsAnswered === 5?
                
                        `here are the scores ${this.state.scoreArray} for ${this.props.playerInfo.userName} of quiz here are the scores and the winner is find the`: 
                            
                        <Quiz   quizData={this.props.playerInfo} 
                                playerInfo={this.props.playerInfo} 
                                currentPlayer={this.props.playerInfo.userName[this.state.playerIndex]} 
                                answeredQuestions={this.updateAnsweredQuestions}
                                score={this.updateScore}/>
                        }
                
            </div>
        
        )
    }
}


export default QuizManager