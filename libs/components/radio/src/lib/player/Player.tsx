import React, { Component } from 'react'

import * as ui from '@aazadi/ui-kit'
import './Player.scss'

// Components
import Recommender from '../recommender/Recommender';

export interface PlayerProps {
  playTrackId: string
}

export class Player extends Component<PlayerProps> {
  state = {
    isPlaying: false,
    mediaLoaded: false,
    playerState: 'full', // or 'min'
    playTrack: {
      id: this.props.playTrackId,
      title: '',
      subtitle: '',
      artURL: '',
    }
  }

  componentDidMount() {
    // TODO: Get given playTrack id from DB
  }

  getTrackArt = () => {
    
  }

  render() {
    return (
      <div className="player">
        <div className="playTrack">
          <div className="playTrack-details">
            <p className="playTrack-name">{ this.state.playTrack.title }</p>
            <p className="playTrack-subtitle">{ this.state.playTrack.subtitle }</p>
          </div>

          <div className="playTrack-art">
            <div className="playTrack-art-container">
              {
                this.state.mediaLoaded ? (
                  <img className="playTrack-art-image" src="" alt=""/>
                ) : (
                  <img className="loading-animation" src="" alt=""/>
                )
              }
            </div>
          </div>
        </div>

        <Recommender 
            context={{
              contextType: 'player',
              playingTrackId: this.state.playTrack.id,
              caller: Player
            }}
            listType={ 'limited' }
            listStyle={ 'vertical' }
            omitTracks={[ this.state.playTrack.id ]}
            changeTrack={(trackId)=>{
              // Use this to change track
            }}
          />
      </div>
    )
  }
}

export default Player