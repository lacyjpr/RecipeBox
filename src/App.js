import React, {Component} from 'react';
import {Redirect, Route, Router} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import Login from './components/Login';
import RecipeBox from './components/RecipeBox';


const customHistory = createBrowserHistory();
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            auth: false
        };

        this.toggleAuth = this.toggleAuth.bind(this);
    }

    toggleAuth() {
        this.setState({
            auth: !this.state.auth.value
        }); 
    }

    render() {
        // pass props in router v4 credit: https://stackoverflow.com/questions/41005697/passing-props-to-react-router-4-0-0-children-routes
        return (
            <Router history={customHistory}>
                <div>
                    <Route path='/login' render={(props) => <Login action={this.toggleAuth} {...props} auth={this.state.auth}/>} />
                    <Route path='/recipebox' render={() => <RecipeBox auth={this.state.auth}/>} />
                </div>
            </Router>
        );
    }
}

export default App;
