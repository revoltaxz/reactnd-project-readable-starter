import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Home from './components/Home/Home'
import Posts from './components/Posts/Posts'
import NewPost from './components/Posts/NewPost'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home />
        <Posts />
        <NewPost />
      </div>
    );
  }
}

export default App;
