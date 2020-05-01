import React from 'react';
import styles from './UserInfo.module.css';
import ReactDOM from 'react-dom'

class UserInfo extends React.Component{

    constructor(props) {
        super(props);

        // set states for each user data
        this.state = {
            userName : null,
            difficulty: "",
            category: "",
            categoryName: ""
        }
   }


    playerData = (event) => {
            
        event.preventDefault();
        const node = ReactDOM.findDOMNode(this);
        
        // let categoryValue =node.querySelector('#category').value
        
        const userDataObj={
            userName: node.querySelector('#username').value,
            category: node.querySelector('#category').value,
            categoryName: node.querySelectorAll('option:checked')[0].attributes[0].nodeValue,
            difficulty: node.querySelectorAll("input[type=radio]:checked")[0].value
           
        }
        console.log(node.querySelectorAll('option:checked')[0].attributes[0].nodeValue)//.getAttribute("name"))
        this.props.playerData(userDataObj)
  
    }

    render() {
        
        return( 

            <div className= {styles.formDiv}>
                <div className={styles.formContainer}>
                    <form onSubmit={this.playerData}>
                        <label className= {styles.player}>Player(s)</label> <br />
                        <input className= {styles.bar} type="text" name="username" id="username" placeholder="insert player name(s)"  required={true} />
                        <p className={styles.diff}>Select Level</p>
                        <label className= {styles.text}>Easy </label>
                        <input type="radio" name="difficulty" id="easy" value="easy" required={true} />
                        <label className= {styles.text}>Medium </label>
                        <input type="radio" name="difficulty" id="medium" value="medium" />
                        <label className= {styles.text}>Difficult </label>
                        <input type="radio" name="difficulty" id="difficult" value="hard"/>
                        <br />
                        {/* dropdown for categories */}
                        <div className={styles.categoryDiv}>
                            <select id="category" name="category" value={this.state.category} required={true}>
                                <option name="Please Select Category" value=""> Please Select Category</option>
                                <option name ="Celebrity" value="26">Celebrity</option>
                                <option name="Mythology" value="20">Mythology</option>
                                <option name="History" value="23">History</option>
                                <option name="Animals" value="27">Animals</option>
                                <option name="Science & Computers" value="18">Science & Computers</option>
                            </select> 
                        </div>
                        <div className={styles.instructions}>
                            <span className={styles.instructHead}>Player Instructions</span>
                            <span className={styles.instruct}>1 : Insert Player Name(s) add " , " for multiplayer</span>
                            <span className={styles.instruct}>2 : Each player will have a set of 5 questions </span> 
                            <span className={styles.instruct}>See who's the Whiz in this Quiz!</span>
                            <em className={styles.instruct}>Whuiz the Quiz App</em> 
                        </div>
                            <div className={styles.buttonDiv}>
                                <button type="submit" className={styles.playbutton}>Play</button>
                            </div>
                    </form>

                </div>
            </div>
        )
    }
}


export default UserInfo;