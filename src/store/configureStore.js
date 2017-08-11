import * as redux from 'redux';
import thunk from 'redux-thunk';

import {authReducer} from './../reducers/reducers';

export const configure = (initialState = {}) => {
    const reducer = redux.combineReducers({
        authReducer: authReducer
    });

    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || redux.compose;
    const enhancer = composeEnhancers(
		redux.applyMiddleware(thunk)
	);
    const store = redux.createStore(reducer, initialState, enhancer);

    return store;    
}