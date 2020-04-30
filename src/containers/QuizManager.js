import React, { Component } from 'react';
import Quiz from '../components/Quiz';
import Score from '../components/Score';
// import styles from './Q'

class QuizManager extends Component {
    constructor(props){
        super(props)
        
        this.state={
            questionsAnswered: 0,
            playerIndex: 0,
            finished: false,
            quizQA: null,
            score: 0,
            scoreArray: [],
            carryOn: true, 
            winner: null,
            quizFinished: false

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
                questionsAnswered: 0,
                
            })
        }

        if(this.state.questionsAnswered===5 && this.state.playerIndex<this.props.playerInfo.userName.length-1){
        console.log("this should cause quiz to end")
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

        console.log()
        if(this.state.scoreArray.length===this.props.playerInfo.userName.length){
            this.setState({
                carryOn: false
            })
        } 
    } 
    
   

    }  

    componentDidUpdate(){
        console.log("quiz master has updated")
    
    }

    render() {

        return (

            <div>
                        {this.state.questionsAnswered === 5?

                        //  && this.state.playerIndex!==2? */}
                        // {/* {this.state.playerIndex===2? */}

                        
                        
                        <Score scoreArray={this.state.scoreArray} userName={this.props.playerInfo.userName} userNameArray={this.props.playerInfo.userName[this.state.playerIndex]} winner={this.checkwinner}/> :
                        // <div className="divResults">
                        // {`here are the scores ${this.state.scoreArray} for ${this.props.playerInfo.userName}of quiz here are the scores and the winner is find the`} 
                        // </div> :

                        <Quiz quizData={this.props.playerInfo} 
                        playerInfo={this.props.playerInfo} 
                        currentPlayer={this.props.playerInfo.userName[this.state.playerIndex]} 
                        answeredQuestions={this.updateAnsweredQuestions}
                        score={this.updateScore}/>
                        // {/* {this.state.quizFinished === true? */}
                
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