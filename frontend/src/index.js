import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux';
import  rootReducer  from './reducers'
import thunkMiddleware from 'redux-thunk';
import multi from 'redux-multi'
import { createLogger } from 'redux-logger'


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const loggerMiddleware = createLogger()
const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunkMiddleware ,loggerMiddleware, multi)))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,document.getElementById('root'));

