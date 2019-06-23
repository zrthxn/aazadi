import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import { LoginPage } from './pages/LoginPage'

export class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route path="/" component={LoginPage}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
