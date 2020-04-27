import React from 'react';
import styles from './Quiz.module.css';

class Quiz extends React.Component {

  
    render() {
      return (
      <div className={styles.quizDiv}>
      <h3 className={styles.question}>Question : {this.props.questions}</h3>

      {/* // display answers - find a way to randomise and space the answers out in button form */}
      <h3 className={styles.question}>Answer : {this.props.answers} {this.props.incorrect}</h3>
      </div>
      )
    }
  }

export default Quiz;
