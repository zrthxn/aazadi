import React, { Component } from 'react'

import PlayerContext from './PlayerContext'
import { Player } from '../player/Player'

export class PlayerContextProvider extends Player {
  play = () => {
    console.log('PLAY')
  }

  pause = () => {
    console.log('PAUSE')
  }

  scrub = () => {
    console.log('SCRUB')
  }

  playerController = (trackId, availableProps) => {
    // TRACK PLAY CONTROLLER
    this.setState((prevState, props)=>({
      stateChangeRequested: true,
      requestedState: {
        trackId: trackId
      }
    }))

    this.loadTrack(trackId, availableProps).then( async (track)=>{      
      console.log('Play track', track)
      const mediaLoaded = await this.getTrackArt()
      
      this.setState((prevState, props)=>({
        isPlaying: true,
        isPaused: false,
        isMinimized: false,
        mediaLoaded: mediaLoaded
      }))

      this.acknowledgeStateChange()
    })
  }

  acknowledgeStateChange = () => {
    this.setState((prevState, props)=>({
      stateChangeRequested: false
    }))
  }

  minimize = () => {
    this.setState({
      isMinimized: !this.state.isMinimized
    })
  }

  close = () => {
    this.setState({
      isPlaying: false,
      isPaused: true,
      playTrack: {
        id: null,
        title: null,
        subtitle: null,
        rating: null,
        artURL: null,
      }
    })
  }

  render() {
    return (
      <div>
        <PlayerContext.Provider value={{ 
            state: this.state,
            actions: {
              play: this.play,
              pause: this.pause,
              scrub: this.scrub,
              playTrack: this.playerController,
              acknowledgeStateChange: this.acknowledgeStateChange,
              minimizePlayer: this.minimize,
              closePlayer: this.close
            }
          }}>
            {
              this.props.children
            }
        </PlayerContext.Provider>
      </div>
    )
  }
}

export default PlayerContextProvider