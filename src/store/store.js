import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

import reducers from '../reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || redux.compose;
const enhancer = composeEnhancers(applyMiddleware(thunk));

export default createStore(reducers, enhancer);