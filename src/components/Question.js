import React, { Component } from 'react'
import ReactDOM from "react-dom"
import Answer from './Answer'

export default class Question extends Component {
    constructor(props){
        super(props)
        
        this.state={
            randomisedAnswers:null,
            correctAnswer: null,
            wrongAnswers: null,
            backgroundStyle: "none"
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
                wrongAnswers: questionData.incorrect_answers
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

    componentDidMount(){

        this.createAnswerArray()

    }

    checkCorrect = (event) => {
        console.log(event.target.innerText)
        console.log(this.state.correctAnswer)

        const node = ReactDOM.findDOMNode(this)//.findDOMNode(".answers");

        console.log(node.querySelectorAll('.answer'))
        
        
        //if(this.state.correctAnswer.includes([event.target.innerText])){
        // if(event.target.innerText === this.state.correctAnswer){
            
            
        // }

        // //correct answer cliccked
        
        //     console.log("correct answer clicked")
        //     this.setState({
        //         backgroundStyle: "green"
        //     })

        //     //change color of 
        // }else{
        //     this.setState({
        //         backgroundStyle: "red"
        //     })
        // }

        //if(event.target.innerText === this.state.correctAnswer){
            
            

        // answer is correct make bckgound greend make the rest red     
    
        // }else{
        //     all elemnts 
        //     //make correct answer grenn and all rest red
        // }
    }


    
    
    
    //if click on right answer:
        //- clicked answer goes green, all the res go red
    //else if click on wrong answe:
        // right answer goes green all the rest gor red
    
    render() {

     
    
       
        return (
            
            <div>

          
            {this.state.randomisedAnswers === null ? "waiting for quiz generation" :
            
            <React.Fragment>
                <div className="question">
                            
                            {this.props.questionData.question}   

                            </div>
                            {this.state.randomisedAnswers.map((answer)=> (
                            <Answer answer={answer} {...this.state}/> 
                            ))}

                            
                        


            </React.Fragment>
           
            }
            
            
            </div>
        
        )
    }
}
