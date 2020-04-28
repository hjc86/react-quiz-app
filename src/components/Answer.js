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

    checkCorrect = (event) => {
        console.log(event.target.innerText)
        console.log(this.props.correctAnswer)

        const node = ReactDOM.findDOMNode(this)//.findDOMNode(".answers");

        console.log(node.querySelectorAll('.answer'))
        
        //if(this.state.correctAnswer.includes([event.target.innerText])){
        if(event.target.innerText === this.props.correctAnswer){


        //correct answer cliccked
        
            console.log("correct answer clicked")
            this.setState({
                backgroundStyle: "green"
            })

            //change color of 
        }else{
            console.log("you clicekd worng answre")
            this.setState({
                backgroundStyle: "red"
            })
        }
         
        this.props.clicked(true)

    
    }
    
    
    render() {
        return (

                
                <div className= "answers">
                    <p onClick={this.checkCorrect} style={{backgroundColor: this.state.backgroundStyle}}>{this.props.answer}</p>
                </div>
                
        )
    }
}


export default  Answer
