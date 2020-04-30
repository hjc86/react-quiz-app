import React from 'react';
import styles from './Score.module.css';


class Score extends React.Component{
    
    constructor(props){

        super(props)

        this.state={
            winner: " "
        }
    }
    
    checkWinner = (winner) => {
        if (this.props.scoreArray[0] > this.props.scoreArray[1])
        {
            console.log('user1 won', winner);

            this.setState({
                winner: this.props.userName[0]
            })
        }
    }

   
    componentDidMount(){
        console.log("score updated ")
        this.checkWinner();
    }

    refreshPage = () => {
        window.location.reload(false);
      }

    render() {

        console.log("username arary", this.props.userNameArray)
        console.log("winner", this.state.winner)


        return(
            <div> 
                <h1>The winner is: </h1>

                <p>{this.props.userName[0]} scored {this.props.scoreArray[0]}/5!</p>
            
                <p>{this.props.userName[1]} scored {this.props.scoreArray[1]}/5!</p> 

                <div className={styles.startButtonDiv}>
                    <button className={styles.startButton} onClick={this.refreshPage}>Start New Quiz!</button>
                </div>
                
            </div>
            
        
        )
    }
}

export default Score;