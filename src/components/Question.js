import React, { Component } from 'react'
import ReactDOM from "react-dom"
import Answer from './Answer'
import '../App.css';
import Score from './Score';
import styles from './Question.module.css';

class Question extends Component {
    constructor(props){
        super(props)
        this.state={
            randomisedAnswers:null,
            correctAnswer: null,
            wrongAnswers: null,
            backgroundStyle: "none",
            clicked: false,
            userAnswers : [],
            questionDecoded: ''
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
         
        let randomisedAnswersDecoded= randomisedAnswers.map((answer)=> {
            let txt = document.createElement("textarea")
            txt.innerHTML = answer
            return txt.value
        })
            
        return randomisedAnswersDecoded
    }

    hasBeenClicked = (answerData)=>{
        this.setState({
            clicked : true,
            selectedAnswer: answerData.selectedAnswer,
            backgroundStyle: answerData.backgroundStyle
        })

        if(answerData.addPoint){
            this.props.latestPoint(1)
        }
        else{
            this.props.latestPoint(0)
        }

        this.props.answeredQuestions(1)
    }

    decodeHtml(html) {
        var txt = document.createElement("textarea");
        txt.innerHTML = html;
        this.setState({
            questionDecoded: txt.value
        })
    }

    componentDidMount(){
        this.createAnswerArray()
        this.decodeHtml(this.props.questionData.question)
    }


    render() {
                return (
                    
                    <div className={styles.questionGroup}>

                    {this.state.randomisedAnswers === null ? "waiting for quiz to be generated" :
                        <React.Fragment>
        
                            <div className={styles.questionTitle}>
        

                                <div className={styles.questionBox}>
                                            
                                    {this.state.questionDecoded}

                                </div>
                            </div>
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