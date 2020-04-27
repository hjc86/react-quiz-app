import React from 'react';


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

        // function to take in data
    getUserData = (event) => {
        event.preventDefault();
    
        // calling to trigger the function in App.js (FormSubmit)
        this.props.onSubmit(this.state);
    }

    // create handlechange 

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
            <div>
                <form onSubmit={this.getUserData}>
                    <label>Username:</label>
                    <input type="text" name="username" id="username" onChange={this.handleUser} />

                    <p>Level of Difficulty:</p>
                    <label>Easy</label>
                    <input type="radio" name="difficulty" id="easy" value="easy" checked={this.state.difficulty === "easy"} onChange={this.handleDifficulty} />
                    <label>Medium</label>
                    <input type="radio" name="difficulty" id="medium" value="medium" checked={this.state.difficulty === "medium"} onChange={this.handleDifficulty} />
                    <label>Difficult</label>
                    <input type="radio" name="difficulty" id="difficult" value="difficult" checked={this.state.difficulty === "difficult"} onChange={this.handleDifficulty}/>

                    {/* dropdown for categories */}
                    <select id="category" name="category" onChange={this.handleCategory.bind(this)} value={this.state.category}>
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