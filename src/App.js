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
                store.dispatch(actions.startAddRecipe('Soy Chicken', 'http://del.h-cdn.co/assets/15/51/1450278988-honey-soy-chicken.jpg', 'Chicken\nSoy Sauce\nCider Vinegar\nChives', 'Combine soy sauce & vinegar in a 1:1 ratio\nAdd chives to taste\nMarinate Chicken in soy sauce mixture for 2 hours\nPreheat oven to 400\nCook chicken in a casserole dish until it reaches 165° Fahrenheit (75° Celsius)'));
                store.dispatch(actions.startAddRecipe('Filipino Pork Adobo', 'http://salu-salo.com/wp-content/uploads/2015/04/Pork-Adobo-3.jpg', '10 pounds pork shoulder in 3 inch cubes\n10 *heads* (not cloves) garlic, chopped\n1 medium onion, chopped\n3 bay leaves\n1 tbsp peppercorns\n1 tbsp fresh ground pepper\nLots of soy sauce\nLots of white vinegar\nWater', 'Combine pork, peppercorns, pepper, garlic, onion & bay leaf in a large stew pot\nKeep adding 1 cup soy sauce, 1 cup vinegar & 1 cup water until ingredients are covered\nStir well\nNever ever never stir again! It will prevent essential chemical reactions & break up the meat\nBring to a boil for 30 minutes\nLower heat & simmer for 4 to 6 hours\nServe with steamed white rice'));
                store.dispatch(actions.startAddRecipe('Peanut Butter & Jelly', 'http://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/7/25/4/FNM_090112-Peanut-Butter-and-Jelly-Sandwich-Cake-Recipe_s4x3.jpg.rend.hgtvcom.616.462.suffix/1382541616148.jpeg', 'Peanut Butter\nJelly\nSliced Bread', 'Spread peanut butter on one slice of bread\nSpread jelly on another\nAssemble with sticky stuff inside, not out'));
                store.dispatch(actions.startAddRecipe('Tuna Casserole', 'https://blog.bestbullysticks.com/wp-content/uploads/2011/03/tunacas1.jpg', '1 pkg egg noodles\n1 pound shredded Cheddar\n1 pkg frozen green peas\n2 5 ounce cans tuna, drained\n2 cans condensed cream of mushroom soup\n1 cup crushed potato chips', 'Preheat oven to 425\nCook egg noodles until al dente\nIn a large bowl mix noodles, half the cheese, peas, tuna & soup\nPut mixture in a 9 x 13 inch baking dish\nTop with remaining cheese & crushed potato chips\nBake for 20 minutes or until cheese is bubbly'));
                
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
