import {createStore} from 'redux';
import {rootReducer} from '../reducers';
import {applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
//import reduxImmutableStateInvariant from 'redux-immutable-state-invariant'

export const configureStore = (initialState) => {
    return createStore(
        rootReducer, 
        initialState,
        applyMiddleware(thunk)
    );
}