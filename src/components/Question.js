import React, { Component } from 'react'

export default class Question extends Component {
    constructor(props){
        super(props)
        
        this.state={
            randomisedAnswers:null,
            correctAnswer: null
        }
        


    }
    
    //question logic methods
    
    createAnswerArray= ()=> {  
    let questionData= this.props.questionData 
       let answerArray= questionData.incorrect_answers.concat([questionData.correct_answer])
       let arr = this.getRandomArray(answerArray)

       this.setState({
            randomisedAnswers: arr}
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
        console.log("randpomised indicies",questionAnswerIndicies)
        return randomisedAnswers

      

    }

    componentDidMount(){

        this.createAnswerArray()

    }

    render() {

       
        return (
            
            this.state.randomisedAnswers === null ? "waiting for quiz generation" :
        
        
          
            <div>
            
            {this.props.questionData.question}    
            {this.state.randomisedAnswers.map((answer)=> (<p>{answer}</p>))}

            </div>

        
        )
    }
}
