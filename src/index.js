import React from 'react';
import ReactDOM from 'react-dom';
import {createStore,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

import App from './continers/App';
import rootReducer from './store/reducers';

import * as actions from './store/actions';


const store = createStore(rootReducer,applyMiddleware(thunk));

store.subscribe(()=>console.log(store.getState()))
store.dispatch(actions.login({}))

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);
