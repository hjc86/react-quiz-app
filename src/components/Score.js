import React from 'react';
import styles from './Score.module.css';


class Score extends React.Component{
    
    constructor(props){

        super(props)

        this.state={
            winner: " "
        }
    }
    
    checkWinner = async (winner) => {
        if ((this.props.scoreArray[0] > this.props.scoreArray[1] ) &&
            (this.props.scoreArray[0] > this.props.scoreArray[2]) &&
            (this.props.scoreArray[0] > this.props.scoreArray[3]) &&
            (this.props.scoreArray[0] > this.props.scoreArray[4]) )
        {
            console.log('user1 won', winner);

            this.setState({
                winner: this.props.userName[0]
            })
        // } else {
        //     this.setState({
        //         winner: this.props.userName[1]
        //     })
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
                <h1>The winner is: {this.state.winner}</h1>

                <p>{this.props.userName[0]} scored {this.props.scoreArray[0]}/5!</p>
            
                <p>{this.props.userName[1]} scored {this.props.scoreArray[1]}/5!</p> 

                <p>{this.props.userName[2]} scored {this.props.scoreArray[2]}/5!</p>

                <p>{this.props.userName[3]} scored {this.props.scoreArray[3]}/5!</p>

                <p>{this.props.userName[4]} scored {this.props.scoreArray[4]}/5!</p>

                <div className={styles.startButtonDiv}>
                <button className={styles.startButton} onClick={this.refreshPage}>Start New Quiz!</button>
            </div>
                
            </div>
            
        
        )
    }
}

export default Score;