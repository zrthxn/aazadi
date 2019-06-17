import React, { Component } from 'react'
import crypto from 'crypto'

// Styles
import * as ui from '@aazadi/ui-kit'
import '../../assets/scss/Home.scss'
import '../Radio.scss'

// Components
import { Recommender } from '@aazadi/components/radio'
import { PlayerContext } from '@aazadi/components/radio'

export default class Home extends Component {
  state = {

  }

  componentDidMount() {
    // TODO: Initialize & login?
  }

  render() {
    return (
      <PlayerContext.Consumer>
        {
          playerContext => (
            <div className="home-page">
              <div className="hero-title">
                <h1>Radio</h1>
                <h2>Aazadi</h2>
              </div>

              <div className="recommender-container">
                <Recommender 
                  title={ 'Horizontal Recommender' }
                  context={{
                    contextType: 'home',
                    playingTrackId: '0x0000',
                    caller: Home
                  }}
                  listType={ 'scroll' }
                  listStyle={ 'horizontal' }
                  omitTracks={[]}
                  playTrack={(trackId, availableProps)=>{
                    playerContext.actions.playTrack(trackId, availableProps)
                  }}
                />

                <Recommender 
                    title={ 'Vertical Recommender' }
                    context={{
                      contextType: 'home',
                      playingTrackId: '0x0000',
                      caller: Home
                    }}
                    listType={ 'scroll' }
                    listStyle={ 'vertical' }
                    omitTracks={[]}
                    playTrack={(trackId, availableProps)=>{
                      playerContext.actions.playTrack(trackId, availableProps)
                    }}
                  />
              </div>        
            </div>
          )
        }
      </PlayerContext.Consumer>
    )
  }
}