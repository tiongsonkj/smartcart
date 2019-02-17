import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducers from './reducers';

const initialState = {};

//redux middleware, calls action creators that return a function instead of an action object
const middleware = [thunk];

const store = createStore(
    rootReducers,
    initialState,
    compose(
        applyMiddleware(...middleware),

        //need this line to implement the chrome Redux extension
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() 
    )
)

export default store;