import React, { Component } from 'react';

import styled from 'sass';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const StyledApp = styled.div``;

const Header = styled.header`
  text-align: center;
`;

export class App extends Component {
  render() {
    return (
      <Router>
        <StyledApp>
          <ul>
            <li>
              <Link to="/">Root</Link>
            </li>
          </ul>
          <Header>
            <h1>Welcome to admin!</h1>
            <img
              width="450"
              src="https://raw.githubusercontent.com/nrwl/nx/master/nx-logo.png"
            />
          </Header>
          <p>
            This is a React app built with <a href="https://nx.dev">Nx</a>.
          </p>
          <p>
            🔎 **Nx is a set of Angular CLI power-ups for modern development.**
          </p>
          <h2>Quick Start & Documentation</h2>
          <ul>
            <li>
              <a href="https://nx.dev/getting-started/what-is-nx">
                30-minute video showing all Nx features
              </a>
            </li>
            <li>
              <a href="https://nx.dev/tutorial/01-create-application">
                Interactive tutorial
              </a>
            </li>
          </ul>
          <Route
            path="/"
            exact
            render={() => <div>This is the root route.</div>}
          />
        </StyledApp>
      </Router>
    );
  }
}

export default App;
