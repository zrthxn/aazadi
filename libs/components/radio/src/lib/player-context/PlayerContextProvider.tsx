import React, { Component } from 'react'

import PlayerContext from './PlayerContext'

export class PlayerContextProvider extends Component {
  state = {
    isPlaying: false,
    playTrackId: '0x0000',
    playTrack: trackId => {
      // Play track
      console.log('Play track')
      console.log(trackId)
    },
    changeTrack: trackId => {
      // Change track
      console.log('Change track')
      console.log(trackId)
    }
  }

  render() {
    return (
      <div>
        <PlayerContext.Provider value={ this.state }>
          {
            this.props.children
          }
        </PlayerContext.Provider>
      </div>
    )
  }
}

export default PlayerContextProvider