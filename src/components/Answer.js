import React, { Component } from 'react'
import ReactDOM from "react-dom"
import '../App.css';

// style={{backgroundColor: this.state.backgroundStyle }
class Answer extends Component {
     
    constructor(props){
        super(props)

        this.state={
            backgroundStyle: "#ffdd59",
            chosen : false 
        }

    }

    checkCorrect = async (event) => {
        // console.log(event.target.innerText)
        // console.log(this.props.correctAnswer)
        
        let addPoint;
        if(event.target.innerText === this.props.correctAnswer){

            // console.log("correct answer clicked")
            addPoint= true
            this.setState({
                //backgroundStyle: "#63cdda",
                backgroundStyle: "repeating-linear-gradient(45deg,#606dbc,#606dbc 4px,#465298 4px,#465298 8px",
                
            })

        }else{
            // console.log("you clicked wrong answer")
            addPoint= false
           
            this.setState({
                //backgroundStyle: "#e66767",
                backgroundStyle: "repeating-linear-gradient(45deg,#606dbc,#606dbc 4px,#465298 4px,#465298 8px",
             })
        }

        let answerData={
            clicked: true,
            selectedAnswer: event.target.innerText,
            addPoint: addPoint
        }
         
        this.props.clicked(answerData)

    
    }
    
    render() {
        return (

                
                <div className="buttonDiv">
                    <button className= {"answers "+ this.props.className} onClick={this.checkCorrect} style={{background: this.state.backgroundStyle, display : this.state.display}}>{this.props.answer}</button>
                </div>
                
        )
    }
}


export default  Answer