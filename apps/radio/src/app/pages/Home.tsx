import React, { Component } from 'react'
import crypto from 'crypto'

// Styles
import '../../assets/scss/Home.scss'
import '../Radio.scss'

// Components
import { Recommender } from '@aazadi/components/radio'

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
              listStyle={ 'vertical' }
              omitTracks={ null }
            />
        </div>        
      </div>
    )
  }
}