import React, { Component } from 'react';
import './App.css';
import Posts from './components/Posts/Posts'
import Header from './components/Header/header'
import { Router, Route, Switch  } from 'react-router-dom'
import { history } from "./utils/history";
import PostDetail from "./components/PostDetail/PostDetail";

class App extends Component {
  render() {
    return (
      <Header>
        <Router history={history}>
          <div className="App">
            <Switch>
              <Route exact path="/" component={Posts} />
              <Route exact path="/:category" component={Posts} />
              <Route exact path="/:category/:post_id" component={PostDetail} />
            </Switch>
          </div>
        </Router>
      </Header>
    );
  }
}

export default App;
