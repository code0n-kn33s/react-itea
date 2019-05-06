import { createStore, compose } from "redux";
import mainReducer from '../reducers';

const composeEnhancers =  process.env.NODE_ENV !== 'production' && typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;

const store = createStore( mainReducer, composeEnhancers() );

export default store;