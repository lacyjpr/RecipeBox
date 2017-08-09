import React, {Component} from 'react';
import {Redirect, Route, Router} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import Login from './components/Login';
import RecipeBox from './components/RecipeBox';


const customHistory = createBrowserHistory();
class App extends Component {
    render() {
        return (
            <Router history={customHistory}>
                <div>
                    <Route path='/login' component={Login}/>
                    <Route path='/recipebox' component={RecipeBox}/>
                    <Redirect from='/' to='/login'/>
                </div>
            </Router>
        );
    }
}

export default App;
