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
    }
    render() {
        return (
            <Router history={customHistory}>
                <div>
                    <Route path='/login' component={Login}/>
                    <Route path='/recipebox' component={RecipeBox}/>
                    <Route exact path='/' render={() => (
                        this.state.auth ? (
                            <Redirect to='/recipebox'/>
                        ) : (
                            <Login/>
                        )
                    )}/>
                    <Redirect from='/' to='/login'/>
                </div>
            </Router>
        );
    }
}

export default App;
