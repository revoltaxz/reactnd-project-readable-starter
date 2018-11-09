import React, { Component } from 'react';
import './App.css';

import Posts from './components/Posts/Posts'
import NewPost from './components/Posts/NewPost'
import Header from './components/Header/header'
import { Router, Route, Switch  } from 'react-router-dom'
import { history } from "./utils/history";
import InfoPost from "./components/Posts/InfoPost";

class App extends Component {
  render() {
    return (
        <Router history={history}>
          <div className="App">
            <Header>
              <Switch>
                <Route exact path="/" component={Posts} />
                <Route exact path="/new" component={NewPost} />
                <Route exact path="/:category" component={Posts} />
                <Route exact path="/:category/:post_id" component={InfoPost} />
              </Switch>
            </Header>
          </div>
        </Router>
    );
  }
}

export default App;
