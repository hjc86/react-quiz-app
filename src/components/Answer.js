import React, { Component } from 'react'
import ReactDOM from "react-dom"


// style={{backgroundColor: this.state.backgroundStyle }
class Answer extends Component {
     
    constructor(props){
        super(props)

        this.state={
            backgroundStyle: "none"
            
        }

    }

     checkCorrect = async (event) => {

        console.log(event.target.innerText)
        console.log(this.props.correctAnswer)
        const node = ReactDOM.findDOMNode(this)//.findDOMNode(".answers");
        console.log(node.querySelectorAll('.answer'))
        
        let backgroundStyle;
        let addPoint;
        //if(this.state.correctAnswer.includes([event.target.innerText])){
        if(event.target.innerText === this.props.correctAnswer){
                backgroundStyle = "green"
                addPoint = true
        }else{
                backgroundStyle = "red"
                addPoint = false   
        }
         
        let answerData={
            clicked: true,
            selectedAnswer: event.target.innerText,
            backgroundStyle: backgroundStyle,
            addPoint: addPoint
        }
        console.log(`add ${addPoint}`)
        this.props.clicked(answerData)

    
    }
    
    
    render() {
        return (


                <div className= "answers">
                    <p onClick={this.checkCorrect} style={{backgroundColor: this.state.backgroundStyle, display: "flex"}}>{this.props.answer}</p>
                </div>
                
        )
    }
}


export default  Answer
