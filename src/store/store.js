import * as Redux from 'redux';
import thunk from 'redux-thunk';

import {authReducer, recipesReducer} from '../reducers/reducers';

export const configure = (initialState = {}) => {
    const reducers = Redux.combineReducers({
        auth: authReducer,
        recipes: recipesReducer
    });
    
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || Redux.compose;
    const enhancer = composeEnhancers(Redux.applyMiddleware(thunk));

    const store = Redux.createStore(reducers, initialState, enhancer);

    return store;
};

