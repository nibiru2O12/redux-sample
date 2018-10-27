import React from 'react';
import ReactDOM from 'react-dom';
import {createStore,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

import App from './continers/App';
import rootReducer from './store/reducers';

import * as actions from './store/actions';


// applyMiddleware injects store to applyMiddleware
// middleware must return a function that accepts di
const logger = (store) => {
	return next => {
		return action => {
			console.log('dispatching', action);
			const value = next(action) //dispatch action;
			console.log('new state ', store.getState())
            return value;
        }
	}
}

const crashReport = store => next => action => {
    try{
        return next(action)
    }catch(e){
        console.error(e);
    }
}

const store = createStore(rootReducer,{auth:{showTopNav:true}},applyMiddleware(logger,crashReport,thunk));
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);
