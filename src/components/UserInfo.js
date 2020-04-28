import React from 'react';
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
        
            // console.log("catergory", node.querySelector('#category').value)
            // console.log("radio value", node.querySelectorAll("input[type=radio]:checked")[0].value)
    
            const userDataObj={
                userName: node.querySelector('#username').value,
                category: node.querySelector('#category').value,
                difficulty: node.querySelectorAll("input[type=radio]:checked")[0].value
            }
    
            this.props.playerData(userDataObj)
  
    }



    render() {
        
        return( 
            <div className= "formDiv">
                <form onSubmit={this.playerData}>
                    <label>Username:</label>
                    <input type="text" name="username" id="username" required={true} />

                    <p>Level of Difficulty:</p>
                    <label>Easy</label>
                    <input type="radio" name="difficulty" id="easy" value="easy" required={true} />
                    <label>Medium</label>
                    <input type="radio" name="difficulty" id="medium" value="medium"/>
                    <label>Difficult</label>
                    <input type="radio" name="difficulty" id="difficult" value="hard"/>

                    {/* dropdown for categories */}
                    <select id="category" name="category" value={this.state.category} >
                        <option value=""> Please Choose Category</option>
                        <option value="26">Celebrity</option>
                        <option value="20">Mythodology</option>
                        <option value="23">History</option>
                        <option value="27">Animals</option>
                        <option value="18">Science & Computers</option>
                    </select> 

                    <input type="submit" />
                </form>
            </div>
        )
    }
}


export default UserInfo;