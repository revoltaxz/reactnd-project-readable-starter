import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Home from './components/Home/Home'
import Posts from './components/Posts/Posts'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home />

      </div>
    );
  }
}

export default App;
