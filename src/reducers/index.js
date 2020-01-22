import { combineReducers } from 'redux';
import counterReducer from './counter';
import loggedReducer from './isLogged';
import postReducer from './postReducer';

const rootReducers = combineReducers({
    counter: counterReducer,
    isLogged: loggedReducer,
    posts: postReducer
});
export default rootReducers;