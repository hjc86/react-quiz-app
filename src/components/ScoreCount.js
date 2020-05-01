import React from 'react';
import styles from './ScoreCount.module.css';

class ScoreCount extends React.Component {
    constructor(props) {
        super(props)
    }


    render() {
        return (
            <div className={styles.scoreCountList}>
                 {this.props.scoreCount}
            </div>
                
        )
    }
}

export default ScoreCount;