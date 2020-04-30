import React, { Component } from 'react'
import ReactDOM from "react-dom"
import Answer from './Answer'
import '../App.css';
import Score from './Score'


class Question extends Component {
    constructor(props){
        super(props)
        
        this.state={
            randomisedAnswers:null,
            correctAnswer: null,
            wrongAnswers: null,
            backgroundStyle: "none",
            clicked: false,
            userAnswers : []
        }



    }
   
    
    createAnswerArray= ()=> {  
        let questionData= this.props.questionData 
        let answerArray= questionData.incorrect_answers.concat([questionData.correct_answer])
        let arr = this.getRandomArray(answerArray)

        this.setState(
            {
                randomisedAnswers: arr,
                correctAnswer: questionData.correct_answer,
                wrongAnswers: questionData.incorrect_answers,
            }
        ) 
    }
    
    
    getRandomArray= (array) => {
        const questionAnswerIndicies = []
        const randomisedAnswers = []

        while(questionAnswerIndicies.length<array.length){
           let randomIndex = Math.floor(Math.random() * Math.floor(array.length));
            if(!questionAnswerIndicies.includes(randomIndex)){
                questionAnswerIndicies.push(randomIndex) 
                randomisedAnswers.push(array[randomIndex])
            };   
        }

        // console.log("randomised indicies",questionAnswerIndicies)
        return randomisedAnswers

    }


    hasBeenClicked = (answerData)=>{
        
        this.setState({
            clicked : true,
            selectedAnswer: answerData.selectedAnswer,
            backgroundStyle: answerData.backgroundStyle
        })

  
        // console.log("should add point", answerData.addPoint)
       
        if(answerData.addPoint){
            this.props.latestPoint(1)     
        }
        else{
            this.props.latestPoint(0)
        }
        
        this.props.answeredQuestions(1)
       
        //console.log("player score in qusestion componet", this.state.playerScore)

        // let scoreUpdate = answerData.addPoint ? this.1: 0  
        // this.props.currentScore(scoreUpdate)
                    
    }



    componentDidMount(){
        this.createAnswerArray()
    }


    render() {

        
                return (
                    
                    <div>
                    
                  
                    {this.state.randomisedAnswers === null ? "waiting for quiz to be generated" :
                    
                        <React.Fragment>
        
                            <div style={{border: "5px solid black"}}>
        
        
                                <div className="questionAnswers">
                                            
                                    {this.props.questionData.question}   
        
                                </div>
        
                            </div>
        
        
                            {/* if an aswer had been clicked then make this section unclicable and change style to opaque */}
                            {this.state.randomisedAnswers.map((answer)=> (
                            <Answer {...this.state} answer={answer} clicked={this.hasBeenClicked} className={this.state.clicked ? "inactive": ""} /> 
                            ))}
        
        
                        </React.Fragment>
                   
                    }
                     
                     
                  
                    
                        
                       </div>
                
                )
            }
}


export default Question