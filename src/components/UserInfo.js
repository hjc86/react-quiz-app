import React from 'react';


class UserInfo extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            difficulty: ''
        }
    }

    getUserData = (event) => {
        event.preventDefault();
        this.setState({
            username: event.target[0].value
        })

    }

    handleChange = (event) => {
        this.setState({
            difficulty: event.target.value
        });
    }

    componentDidUpdate() {
        console.log(this.state);
    }
    


    render() {
        
        return( 
            <div>
                <form onSubmit={this.getUserData}>
                    <label>Username:</label>
                    <input type="text" name="username" id="username" onChange={this.handleChange} />

                    <p>Level of Difficulty:</p>
                    <label>Easy</label>
                    <input type="radio" name="difficulty" id="easy" value="easy" checked={this.state.difficulty === "easy"} onChange={this.handleChange} />
                    <label>Medium</label>
                    <input type="radio" name="difficulty" id="medium" value="medium" checked={this.state.difficulty === "medium"} onChange={this.handleChange} />
                    <label>Difficult</label>
                    <input type="radio" name="difficulty" id="difficult" value="difficult" checked={this.state.difficulty === "difficult"} onChange={this.handleChange}/>

                    {/* dropdown for categories */}

                    <input type="submit" />
                </form>
            </div>

        )
    }
}

export default UserInfo;