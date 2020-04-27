import React from 'react';
import styles from './Quiz.module.css';

class Quiz extends React.Component {
    render() {
      return (
      <div className={styles.quizDiv}>
      <h3 className={styles.question}>Question : {this.props.questions}</h3>
      </div>
      )
    }
  }

export default Quiz;
