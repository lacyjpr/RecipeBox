import * as Redux from 'redux';
import thunk from 'redux-thunk';

import {authReducer} from '../reducers/reducers';

export const configure = (initialState = {}) => {
    const reducers = Redux.combineReducers({
        users: authReducer
    });
    
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || Redux.compose;
    const enhancer = composeEnhancers(Redux.applyMiddleware(thunk));

    const store = Redux.createStore(reducers, initialState, enhancer);

    return store;
};

