import React from 'react';
import Question from './Question';
import '../App.css';

class Quiz extends React.Component {


  render() {

    console.log(this.props.quizData)
      return (
        
        <div className="quizDiv">


        {this.props.quizData.map((questionItem, index) => <Question questionData={questionItem} />)}
          
        

        </div>

        
        
      
          
  

      // <div className={styles.quizDiv}>
      // <h3 className={styles.question}>Question : {this.props.questions}</h3>

      // {/* // display answers - find a way to randomise and space the answers out in button form */}
      // <h3 className={styles.question}>Answer : {this.props.answers} {this.props.incorrect}</h3>
      // </div>
    )
  }
}

export default Quiz;
