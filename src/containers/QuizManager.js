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


    // getQuizApi = async (userData) => {

    //     const categoryNumber = userData.category;
    //     const difficulty = userData.difficulty;
    
    //     const apiCall = await fetch(`https://opentdb.com/api.php?amount=5&category=${categoryNumber}&difficulty=${difficulty}&type=multiple`);
    //     const data = await apiCall.json();
    
    //     console.log("first question from api",data.results[0].question);
      
    //     // to get the whole data 
    //     this.setState({
    //       QuizQ:data.results
    //     });
    
    // }

    
    // checkFinished(){
        
    // }


    render() {

        // console.log("qm questions anserewd", this.state.questionsAnswered)
        // console.log("index", this.state.playerIndex)
     
       // console.log("quizmanger question",this.props.quizData[0].question)
        return (

            <div>

                    
                {this.state.questionsAnswered === 5 ? 
                        
                        "nothing here":
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