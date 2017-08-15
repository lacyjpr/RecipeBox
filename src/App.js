import React, {Component} from 'react';
import {Redirect, Route, Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import createBrowserHistory from 'history/createBrowserHistory';

import * as actions from './actions/actions';
import {configure} from './store/store';
import {firebaseAuth} from './firebase/';
import Login from './components/Login';
import RecipeBox from './components/RecipeBox';


const store = configure();
const customHistory = createBrowserHistory();

// Protect private routes credit: Tyler McGinnis https://github.com/tylermcginnis/react-router-firebase-auth/blob/master/src/components/index.js
// Further explanation here: https://stackoverflow.com/questions/43484302/whate-does-it-mean-rest-in-react-jsx
function PrivateRoute ({component: Component, auth}) {
    return (
        <Route
            render={(props) => auth === true
            ? <Component/>
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
                store.dispatch(actions.login(user.uid));
                store.dispatch(actions.startAddRecipes());
                this.setState({
                    auth: true
                });
            } else {
                store.dispatch(actions.logout());
                this.setState({
                    auth: false
                });
            }
        });
    }

    componentWillUnmount() {
        this.removeListener();
    }

    render() {
        return (
            <Provider store={store}>
                <Router history={customHistory}>
                    <div>
                        <PublicRoute auth={this.state.auth} exact path='/' component={Login}/>
                        <PublicRoute auth={this.state.auth} path='/login' component={Login}/>
                        <PrivateRoute auth={this.state.auth} path='/recipebox' component={RecipeBox}/>
                    </div>
                </Router>
            </Provider>
        );
    }
}

export default App;
