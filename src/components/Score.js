import React from 'react';
import styles from './Score.module.css';
import ScoreBoard from './ScoreBoard';
import ScoreCount from './ScoreCount';


class Score extends React.Component{
    
    constructor(props){

        super(props)

        this.state={
            winner: " "
        }
    }
    
    checkWinner = () => {

        let winner = this.props.scoreArray.indexOf(Math.max(...this.props.scoreArray));

       if (winner === 0) {
            this.setState({
                winner: this.props.userName[0]
                })
        } else if (winner === 1) {
            this.setState({
                winner: this.props.userName[1]
                })
        } else if (winner === 2) {
            this.setState({
                winner: this.props.userName[2]
                })
        } else if (winner === 3) {
            this.setState({
                winner: this.props.userName[3]
                })
        } else {
            this.setState({
                winner: this.props.userName[4]
                })
        }
    }


    // getPlayerItems = () => { 
    //     this.props.userName.map((userNames)=> 
    //         userNames);
    //     return (
    //         this.userNames
    //     )
    // }

   
    componentDidMount(){
        console.log("score updated ")
        this.checkWinner();
    }

    refreshPage = () => {
        window.location.reload(false);
      }

    render() {


        return(
            <div className={styles.scoreComponent}> 
                <div className={styles.scoreComponentResults}>
                    <h1 className={styles.scoreResultsChild}>The winner is:{this.state.winner} </h1>
                    
                    <h3 className={styles.scoreResultsChild}>Scoreboard</h3>
                    <div className={styles.scoreGroup}>
                        <div className={styles.scoreBoard}>  
                            {this.props.userName.map((scoreBoard)=> (
                            <ScoreBoard {...this.state} scoreBoard={scoreBoard}/>
                        ))}
                        </div>
                        <div className={styles.scoreCount}>
                        {this.props.scoreArray.map((scoreCount)=> (
                            <ScoreCount {...this.state} scoreCount={scoreCount} />
                        ))}
                        </div>
                    </div>

                   {/* <div className="scoreBoard">
                       <ul className={styles.scoreResultsChild}>Scoreboard:
                          <li className={styles.scoreResultsChild}>{this.props.userName[0]} : {this.props.scoreArray[0]}</li> 
                          <li className={styles.scoreResultsChild}>{this.props.userName[1]} : {this.props.scoreArray[1]}</li> 
                          <li className={styles.scoreResultsChild}>{this.props.userName[2]} : {this.props.scoreArray[2]}</li> 
                          <li className={styles.scoreResultsChild}>{this.props.userName[3]} : {this.props.scoreArray[3]}</li> 
                          <li className={styles.scoreResultsChild}>{this.props.userName[4]} : {this.props.scoreArray[4]}</li> 
                        </ul>
                   </div> */}

                    
                </div>

                <div className={styles.skyContainer}>
                    <div className={styles.star}></div>
                    <div className={styles.star}></div>
                    <div className={styles.star}></div>
                    <div className={styles.star}></div>
                    <div className={styles.star} ></div>
                </div>

                

                <div className={styles.startButtonDiv}>
                        <button className={styles.startButton} onClick={this.refreshPage}>Start New Quiz!</button>
                </div>

                
                
            </div>
            
        
        )
    }
}

export default Score;

