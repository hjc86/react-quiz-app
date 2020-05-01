import React from 'react';
import styles from './Score.module.css';
import ScoreBoard from './ScoreBoard';
import ScoreCount from './ScoreCount';

class Score extends React.Component{
    constructor(props){
        super(props)
        this.state={
            winner: []
        }
    }


    checkWinner = async () =>{ 

        let i = this.props.scoreArray.indexOf(Math.max(...this.props.scoreArray));
        let maxScore = Math.max(...this.props.scoreArray)
        console.log(i)
        console.log(maxScore)

        let jointTop =  await this.props.scoreArray.reduce(function(arr, element, index) {
            if (element === maxScore )
                arr.push(index);
            return arr;
        }, []);  

        console.log("length of winnders", jointTop.length)
      
        let winner;
        if(jointTop.length===1){
            winner=[this.props.userName[i]]
        }
        else{
           winner = jointTop.map((joint)=>this.props.userName[joint])
        }

        console.log("winners", winner)
        await this.setState({
            winner: winner,
           
        })

    }

    componentDidMount(){
        this.checkWinner()
    }

    

    render() {

        
        console.log(" rendered winners", this.state.winner)
        console.log("carry on",this.props.carryOn)


        return(
            <div className={styles.scoreComponent}> 
                <div className={styles.scoreComponentResults}>
                    <h1 className={styles.scoreResultsChild}>Score Board</h1>
          
                        {this.props.scoreArray.map((playerScore, index) =>                                      
                            <p className={styles.scoreResultsChild}>{this.props.userName[index]} scored {playerScore}/5!</p>
                        )}

                </div>
                
                <div className={styles.skyContainer}>   
                    {this.state.winner.length===1 ?     
                            <div className={styles.winnerContainer}> 
                                        <p style={{fontSize: "60px"}}>WINNER</p> 
                                        <p>{this.state.winner}</p>
                            </div>:
                            <div className={styles.winnerContainer}> 
                                <p style={{fontSize: "60px"}}>TIED</p> 
                                {this.state.winner.map((winner) =>                                      
                                    <p>{winner} </p>
                                )}
                            </div>
                    }
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

