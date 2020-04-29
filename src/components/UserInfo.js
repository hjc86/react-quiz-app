import React from 'react';
import styles from './UserInfo.module.css';


class UserInfo extends React.Component{

    constructor(props) {
        super(props);

        // set states for each user data
        this.state = {
            username : null,
            difficulty: null,
            category: null
        }
    }

        // function to take in userdata
    getUserData = (event) => {
        event.preventDefault();
    
        // calling to trigger the function in App.js (playerData)
        this.props.playerData(this.state);
    }

    //functions to set state on each input change

    handleUser = (e) => {
        this.setState({
            username: e.target.value
        });
    }

    handleDifficulty = (e) => {
        this.setState({
            difficulty: e.target.value
        });
    }

    handleCategory = (e) => {
        this.setState({
            category: e.target.value

        }); console.log(e);
    }


    render() {
        
        return( 
            <div className= {styles.formDiv}>
                <form onSubmit={this.getUserData}>
                    <label className= {styles.player}>Player : </label>
                    <input className= {styles.bar} type="text" name="username" id="username" placeholder="     insert player name" onChange={this.handleUser} required={true} />
                    <p className={styles.diff}>Select Level</p>
                    <label className= {styles.text}>Easy </label>
                    <input type="radio" name="difficulty" id="easy" value="easy" checked={this.state.difficulty === "easy"} onChange={this.handleDifficulty}required={true} />
                    <label className= {styles.text}>Medium </label>
                    <input type="radio" name="difficulty" id="medium" value="medium" checked={this.state.difficulty === "medium"} onChange={this.handleDifficulty} />
                    <label className= {styles.text}>Difficult </label>
                    <input type="radio" name="difficulty" id="difficult" value="hard" checked={this.state.difficulty === "hard"} onChange={this.handleDifficulty}/>
                    <br />
                    {/* dropdown for categories */}
                    <select id="category" name="category" onChange={this.handleCategory} value={this.state.category} >
                        <option value=""> Please Select Category</option>
                        <option value="26">Celebrity</option>
                        <option value="20">Mythodology</option>
                        <option value="23">History</option>
                        <option value="27">Animals</option>
                        <option value="18">Science & Computers</option>
                    </select> 
                        <div className={styles.buttonDiv}>
                            <button type="submit" className={styles.playbutton}>Play</button>
                        </div>
                </form>
            </div>
        )
    }
}


export default UserInfo;