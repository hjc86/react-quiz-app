import React from 'react';


class Score extends React.Component{
    
    constructor(props){

        super(props)
    }
    
    
    render() {

        console.log("score props",this.props)

        return(
            <div> 
                <p>  player name: {this.props.currentPlayer} </p>
            
               <p> Score: {this.props.score} / {this.props.roundData.QuizQ.length}  </p> 
                
            </div>
            
        
        )
    }
}

export default Score;