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
                // Default recipes
                store.dispatch(actions.startAddRecipe('Soy Chicken', 'http://del.h-cdn.co/assets/15/51/1450278988-honey-soy-chicken.jpg', 'Chicken\nSoy Sauce\nChives', ''));
                store.dispatch(actions.startAddRecipe('Filipino Pork Adobo', 'http://salu-salo.com/wp-content/uploads/2015/04/Pork-Adobo-3.jpg', '', ''));
                store.dispatch(actions.startAddRecipe('Peanut Butter & Jelly', 'http://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/7/25/4/FNM_090112-Peanut-Butter-and-Jelly-Sandwich-Cake-Recipe_s4x3.jpg.rend.hgtvcom.616.462.suffix/1382541616148.jpeg', '', ''));
                store.dispatch(actions.startAddRecipe('Tuna Casserole', 'https://blog.bestbullysticks.com/wp-content/uploads/2011/03/tunacas1.jpg', '', ''));
                
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
