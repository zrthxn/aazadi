import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import * as ui from '@aazadi/ui-kit'
import './Radio.scss'

// Pages
import Home from './pages/Home'
import About from './pages/About'
import Episodes from './pages/Episodes'
import Subscription from './pages/Subscription'

// Components
import { Header } from '@aazadi/components/radio'
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
  }

  render() {
    return (
      <div className="main">
        <Header/>

        <div className="content">
          <Router>
            <Switch>
              <Route exact path="/" component={Home}/>
              
              <Route exact path="/about" component={About}/>
              
              <Route exact path="/episodes" component={Episodes}/>

              <Route exact path="/subscribe" component={Subscription}/>
            </Switch>
          </Router>
        </div>

        <div className="player-popup">
          <Player playTrackId="0x0000"/>
        </div>
      </div>
    )
  }
}