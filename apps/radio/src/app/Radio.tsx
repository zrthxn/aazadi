import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import * as ui from '@aazadi/ui-kit'
import './Radio.scss'

import { PlayerContextProvider } from '@aazadi/components/radio'
import { PlayerContext } from '@aazadi/components/radio'

// Pages
import Home from './pages/Home'
import About from './pages/About'
import Episodes from './pages/Episodes'
import Subscription from './pages/Subscription'

// Components
import { Player } from '@aazadi/components/radio'

export default class Radio extends Component {
  constructor(props) {
    super(props)
    this.state = {
      applicationVerified: false,
      socketId: null
    }
  }

  componentDidMount() {
    // TODO: Application verification and database socket connection
    document.getElementById("sidebar-shadow").onclick = () => {
      this.closeSidebar()
    }
  }

  closeSidebar() {
    document.getElementById("sidebar-toggle")['checked'] = false
  }

  render() {
    return (
      <PlayerContextProvider>
        <div className="Radio">
          <Router>
            <header>
              <div className="container">
                <div className="logo">
                  <p className="logo-text"><Link to="/" className="logo-text">#</Link></p>
                </div>

                <input type="checkbox" id="sidebar-toggle" hidden/>
                <label htmlFor="sidebar-toggle" className="hamburger"><span></span></label>

                <div className="sidebar">
                    <nav className="sidebar-nav">
                      <ul>
                        <li><Link to="/" onClick={ this.closeSidebar }>home</Link></li>
                        <li><Link to="/about" onClick={ this.closeSidebar }>about</Link></li>
                        <li><Link to="/episodes" onClick={ this.closeSidebar }>episodes</Link></li>
                        <li><Link to="/subscribe" onClick={ this.closeSidebar }>subscribe</Link></li>
                      </ul>
                    </nav>
                  <div className="accent"></div>
                </div>
                <div className="sidebar-shadow" id="sidebar-shadow"></div>
              </div>
            </header>

            <div className="content">
              <Switch>
                <Route exact path="/" component={Home}/>
                
                <Route exact path="/about" component={About}/>
                
                <Route exact path="/episodes" component={Episodes}/>

                <Route exact path="/subscribe" component={Subscription}/>
              </Switch>
            </div>

            <div className="player-popup">
              <Player/>
            </div>
          </Router>
        </div>
      </PlayerContextProvider>
    )
  }
}