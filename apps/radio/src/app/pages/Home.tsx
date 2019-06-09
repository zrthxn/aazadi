import React, { Component } from 'react'
import crypto from 'crypto'

// Styles
import '../static/scss/Home.scss'
import '../Global.scss'

// Components
import Recommender from '../components/Recommender'

export default class Home extends Component {
  state = { }

  componentDidMount() {
    // TODO: Initialize & login?
  }

  render() {
    return (
      <div className="home-page">
        <div className="hero-title">
          <h1>Radio</h1>
          <h2>Aazadi</h2>
        </div>

        <div className="recommender-container">
          <Recommender 
              context={{
                contextType: 'home',
                playingTrackId: '0x0000',
                caller: Home
              }}
              listType={ 'scroll' }
              omitTracks={ null }
            />
        </div>        
      </div>
    )
  }
}