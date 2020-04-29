import React from 'react';

import styles from './UserInfo.module.css';


import ReactDOM from 'react-dom'


class UserInfo extends React.Component{

    constructor(props) {
        super(props);

        // set states for each user data
        this.state = {
            userName : null,
            difficulty: null,
            category: null
        }
    }


    playerData = (event) => {
            event.preventDefault();

            const node = ReactDOM.findDOMNode(this);
    
            const userDataObj={
                userName: node.querySelector('#username').value,
                category: node.querySelector('#category').value,
                difficulty: node.querySelectorAll("input[type=radio]:checked")[0].value
            }
            console.log()
        
    
            this.props.playerData(userDataObj)
  
    }

    render() {
        
        return( 

            <div className= {styles.formDiv}>
                <form onSubmit={this.playerData}>
                    <label className= {styles.player}>Player : </label>
                    <input className= {styles.bar} type="text" name="username" id="username" placeholder="     insert player name"  required={true} />
                    <p className={styles.diff}>Select Level</p>
                    <label className= {styles.text}>Easy </label>
                    <input type="radio" name="difficulty" id="easy" value="easy" required={true} />
                    <label className= {styles.text}>Medium </label>
                    <input type="radio" name="difficulty" id="medium" value="medium" />
                    <label className= {styles.text}>Difficult </label>
                    <input type="radio" name="difficulty" id="difficult" value="hard"/>
                    <br />
                    {/* dropdown for categories */}
                    <select id="category" name="category"  value={this.state.category} >
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