import React from 'react';
import styles from './Quiz.module.css';

class Quiz extends React.Component {


    render() {
      return (

        // questions.map(question => <p> <Question specifiDate={question} /><p>  )
        




        // // {this.state.QuizQ.map(questions => {
        // //   const answers = [questions.correct_answer, ...questions.incorrect_answers]
        // //     console.log(answers);
        // //    return <Quiz questions={questions.question} answers={answers}/>



      <div className={styles.quizDiv}>
      <h3 className={styles.question}>Question : {this.props.questions}</h3>

      {/* // display answers - find a way to randomise and space the answers out in button form */}
      <h3 className={styles.question}>Answer : {this.props.answers} {this.props.incorrect}</h3>
      </div>
      )
    }
  }

export default Quiz;