import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducers from './reducers';

import logger from 'redux-logger';
import thunk from 'redux-thunk';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery';
import 'popper.js';
import 'bootstrap/dist/js/bootstrap';

/***import rootReducer from './reducers/postReducer';**/
//import rootReducer from './reducers/index';

//Action Increment
/**
const increment = () => {
    return {
        type: 'INCREMENT'
    }
}
const decrement = () => {
    return {
        type: 'DECREMENT'
    }
}

const counter = (state = 0, action) => {
    switch(action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;    
    }
};

const counterStore = createStore(counter);
counterStore.subscribe(() => console.log(counterStore.getState()));
counterStore.dispatch(increment());
counterStore.dispatch(decrement());
counterStore.dispatch(decrement());
***/

const myLogger = store => next => action => {
    console.log("Logged Action: ", action);
    let result = next(action);
    console.log("Next State: ", store.getState());
    return result;
};

const crashReport = store => next => action => {
    try {
        return next(action);
    } catch(err) {
        console.log("Caught an exception! ", err);
        throw err;
    }
};

const store = createStore(rootReducers, applyMiddleware(logger, thunk));
/**
store.subscribe(() => {
    console.log("Store updated ", store.getState());
});

store.dispatch({type: "ADD", payload: 50});
**/
//Or 
//const store = createStore(postReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
