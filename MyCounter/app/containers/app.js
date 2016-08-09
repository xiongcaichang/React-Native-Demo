import React,{ Component } from 'react';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';


import * as reducers from '../reducers';
import CounterApp from './counterApp';

const createStoreMiddleWare = applyMiddleware(thunk)(createStore);
const reducer = combineReducers(reducers);
const store =  createStoreMiddleWare(reducer);



export default class App extends Component{
    
    render(){
        return(
            <Provider store={store}>

                <CounterApp/>

            </Provider>

        );
    }
}
