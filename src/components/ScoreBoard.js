import React from 'react';
import styles from './ScoreBoard.module.css';

class ScoreBoard extends React.Component {
    constructor(props) {
        super(props)
    }


    render() {
        return (
                <div className={styles.scoreBoardList}>
                    {this.props.scoreBoard}
                </div>
        )
    }
}

export default ScoreBoard;