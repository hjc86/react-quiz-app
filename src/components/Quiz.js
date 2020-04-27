import React from 'react';

class Quiz extends React.Component {
    render() {
      return (
      <div>
      <h3>Question : {this.props.questions}</h3>
      </div>
      )
    }
  }

export default Quiz;
