import React, { Component } from 'react'
import ReactDOM from "react-dom"
import Answer from './Answer'
import '../App.css';
import Score from './Score'


export default class Question extends Component {
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
    
    //question logic methods
    
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
        console.log("randomised indicies",questionAnswerIndicies)
        return randomisedAnswers

    
    }


    hasBeenClicked = (answerData)=>{
        
        this.setState({
            clicked : true
            selectedAnswer: answerData.selectedAnswer,
            backgroundStyle: answerData.backgroundStyle
      
        })

        //
        console.log("should add point", answerData.addPoint)
       

        if(answerData.addPoint){
            this.props.latestPoint(1)
            
        }
        else{
            this.props.latestPoint(0)
            
        }
        
        this.props.answeredQuestions(1)
       
        console.log(this.state.playerScore)
        // let scoreUpdate = answerData.addPoint ? this.1: 0  
        
     
        // this.props.currentScore(scoreUpdate)
                    
        console.log("already clicked")
    }

    


    componentDidMount(){

        this.createAnswerArray()
       // this.props.currentScore(1)

    }


    render() {

     
    
    //    console.log(this.props.questionData)
        return (
            
            <div>
            
          
            {this.state.randomisedAnswers === null ? "waiting for quiz generation" :
            
                <React.Fragment>

                    <div style={{border: "5px solid black"}}>


                        <div className="questionAnswers">
                                    
                            {this.props.questionData.question}   

                        </div>

                    <div style={{background: "grey"}}>
          
                        {this.state.clicked ? 
                            (<p style={{backgroundColor: this.state.backgroundStyle}}> Selected answer: {this.state.selectedAnswer}  </p>) :
                            this.state.randomisedAnswers.map((answer)=> (
                                <Answer {...this.state} answer={answer} clicked={this.hasBeenClicked} /> 
                            ))
                        }


                    </div>




                    </div>


                    {/* if an aswer had been clicked then make this section unclicable and change style to opaque */}
                    {this.state.randomisedAnswers.map((answer)=> (
                    <Answer {...this.state} answer={answer} clicked={this.hasBeenClicked.bind(this)} className={this.state.clicked ? "inactive": ""} /> 
                    ))}


                </React.Fragment>
           
            }
             
             
          
            
                
               </div>
        
        )
    }
}
