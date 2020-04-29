import React from 'react';
import { Route, Switch, BrowserRouter as Router} from 'react-router-dom';
// import UserInfo from './components/UserInfo';
import App from './App';

class Routes extends React.Component {

    render() {
        return(
            <div className="App">
                <Router>
                    <Switch>
                        <Route exact path='/' component={App} />
                        {/* <Route exact path='/quiz' component={App} /> */}
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default Routes;