import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import  rootReducer  from './reducers'
import thunk from 'redux-thunk';
import multi from 'redux-multi'
import logger from 'redux-logger'


const middleware = applyMiddleware(multi, thunk, logger)
const store = createStore(rootReducer, middleware)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,document.getElementById('root'));

