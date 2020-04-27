import React from 'react';


class UserInfo extends React.Component{
    render() {

        return( 
            <div>
                <form>
                    <label for="username">Username:</label>
                    <input type="text" name="username" id="username" />

                    <p>Level of Difficulty:</p>
                    <label for="easy">Easy</label>
                    <input type="radio" name="difficulty" id="easy" value="Easy" />
                    <label for="medium">Medium</label>
                    <input type="radio" name="difficulty" id="medium" value="Medium" />
                    <label for="difficult">Difficult</label>
                    <input type="radio" name="difficulty" id="difficult" value="Difficult" />

                    {/* dropdown for categories */}

                    <button type="submit">Start Quiz</button>
                </form>
            </div>

        )
    }
}

export default UserInfo;