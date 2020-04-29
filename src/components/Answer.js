import React, { Component } from 'react'
import ReactDOM from "react-dom"
import '../App.css';


// style={{backgroundColor: this.state.backgroundStyle }
class Answer extends Component {
     
    constructor(props){
        super(props)

        this.state={
            backgroundStyle: "none",
            chosen : false 
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
                backgroundStyle: "#63cdda"
            })

            //change color of 
        }else{
            console.log("you clicked wrong answer")
            this.setState({
                backgroundStyle: "#e66767"
            })
        }
         
        this.props.clicked(true)

    
    }
    
    render() {
        return (

                
                <div className="buttonDiv">
                    <button className= {"answers "+ this.props.className} onClick={this.checkCorrect} style={{backgroundColor: this.state.backgroundStyle, display : this.state.display}}>{this.props.answer}</button>
                </div>
                
        )
    }
}


export default  Answer
