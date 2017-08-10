import React, {Component} from 'react';
import {Redirect, Route, Router} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import Login from './components/Login';
import RecipeBox from './components/RecipeBox';
import {firebaseAuth} from './components/firebase/';

const customHistory = createBrowserHistory();

// Protect private routes credit: Tyler McGinnis https://github.com/tylermcginnis/react-router-firebase-auth/blob/master/src/components/index.js
function PrivateRoute ({component: Component, auth, ...rest}) {
    return (
        <Route
            {...rest}
            render={(props) => auth === true
            ? <Component {...props}/>
            : <Redirect to={{pathname: '/login', state: {from: props.location}}} />}
        />
    );
}

function PublicRoute ({component: Component, auth, ...rest}){
    return(
        <Route 
            {...rest}
            render={(props) => auth === false
            ? <Component {...props}/>
            : <Redirect to='/recipebox'/>}
        />
    );
}

class App extends Component {
    state = {
        auth: false
    };

    componentDidMount() {
        this.removeListener = firebaseAuth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({
                    auth: true
                });
            } else {
                this.setState({
                    auth: false
                });
            }
        });
    }

    componentWillUnmount() {
        this.removeListener()
    }

    render() {
        return (
            <Router history={customHistory}>
                <div>
                    <PublicRoute auth={this.state.auth} exact path='/' component={Login}/>
                    <PublicRoute auth={this.state.auth} path='/login' component={Login}/>
                    <PrivateRoute auth={this.state.auth} path='/recipebox' component={RecipeBox}/>
                </div>
            </Router>
        );
    }
}

export default App;
