import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import  rootReducer  from './reducers'
import thunk from 'redux-thunk';
import multi from 'redux-multi'


const middleware = applyMiddleware(multi, thunk)
const store = createStore(rootReducer, middleware)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,document.getElementById('root'));

