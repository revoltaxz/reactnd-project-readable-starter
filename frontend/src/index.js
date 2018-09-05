import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import  rootReducer  from './reducers'
import thunkMiddleware from 'redux-thunk';
import multi from 'redux-multi'
import { createLogger } from 'redux-logger'

const loggerMiddleware = createLogger()
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = createStore(rootReducer, devTools, applyMiddleware(thunkMiddleware,loggerMiddleware, multi))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,document.getElementById('root'));

