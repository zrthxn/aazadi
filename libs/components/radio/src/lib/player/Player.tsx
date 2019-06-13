import React, { Component } from 'react'

import * as ui from '@aazadi/ui-kit'
import './Player.scss'

// Components
import Recommender from '../recommender/Recommender'
import PlayerContext from '../player-context/PlayerContext'

export class Player extends Component {
  state = {
    isPlaying: false,
    isPaused: true,
    isMinimized: false,
    mediaLoaded: false,
    playTrack: {
      id: '0x0000',
      title: 'Loading',
      subtitle: 'Loading',
      rating: 0,
      artURL: '',
    },
    stateChangeRequested: false,
    requestedState: {
      trackId: '0x000f'
    }
  }

  componentDidMount() {
    // TODO: Get given playTrack id from DB
    console.log('BASE CLASS CDM')
  }

  loadTrack = async (trackId: string, availableProps: any) => {
    let loadedTrack = {
      title: null,
      subtitle: null,
      rating: null,
      artURL: null,
    }

    let fetchDataQueue = []

    for(const prop in availableProps)
      if (availableProps.hasOwnProperty(prop))
        loadedTrack[prop] = availableProps[prop]

    for(const prop in loadedTrack) {
      if (loadedTrack.hasOwnProperty(prop)) {
        if(loadedTrack[prop]===null)
          fetchDataQueue.push(prop)
      }
    }      

    // LOAD FROM SERVER DB
    if(fetchDataQueue.length!==0){
      console.log(fetchDataQueue)
      for(let i=0; i<2500000000; i++) { /* ARTIFICIAL LOAD */ }    
      console.log('TRACK LOADED')
    }
    
    this.setState((prevState, props)=>({
      playTrack: {
        id: trackId,
        title: loadedTrack.title,
        subtitle: loadedTrack.subtitle,
        rating: loadedTrack.rating,
        artURL: loadedTrack.artURL,
      }
    }))

    return loadedTrack
  }

  getTrackArt = async () => {
    // LOAD MEDIA FROM DB OR IMAGE
    for(let i=0; i<500000000; i++) { /* ARTIFICIAL LOAD */ }    
    return true;
  }

  playTrack = () => {

  }

  render() {
    const minimizedInterface = (playerContext) => {
      return(
        // MNIMIZED PLAYER
        <div className="player-min">
          <p className="playTrack-name">{ playerContext.state.playTrack.title }</p>
          {/* <div className="playTrack">
            <div className="playTrack-details">
            </div>

            <div className="playTrack-art">
              <div className="playTrack-art-container">
                {
                  playerContext.state.mediaLoaded ? (
                    <img className="playTrack-art-image" src="" alt=""/>
                  ) : (
                    <img className="loading-animation" src="" alt=""/>
                  )
                }
              </div>
            </div>
          </div> */}
        </div>
      )
    }

    const fullScreenInterface = (playerContext) => {
      return(
        // FULL PLAYER
        <div className="player-full">
            <div className="playTrack">
              <div className="playTrack-details">
                <p className="playTrack-name">{ playerContext.state.playTrack.title }</p>
                <p className="playTrack-subtitle">{ playerContext.state.playTrack.subtitle }</p>
              </div>
    
              <div className="playTrack-art">
                <div className="playTrack-art-container">
                  {
                    playerContext.state.mediaLoaded ? (
                      <img className="playTrack-art-image" src="" alt=""/>
                    ) : (
                      <img className="loading-animation" src="" alt=""/>
                    )
                  }
                </div>
              </div>
            </div>
        </div>
      )
    }

    const playerInterfaceBuilder = (playerContext) => {
      if(playerContext.state.isMinimized) {
        return minimizedInterface(playerContext)
      }
      else {
        return fullScreenInterface(playerContext)
      }
    }

    return (
      <PlayerContext.Consumer>
        {
          playerContext => (
            <div>
              {
                playerContext.state.isPlaying ? (
                  <div className="player">
                    <div className="top-controls">
                      <input hidden type="checkbox" id="player-minimize-checkbox" onChange={ playerContext.actions.minimizePlayer }/>
                      <button hidden type="checkbox" id="player-close-button" onClick={ playerContext.actions.closePlayer }>CLOSE</button>
                      <label className="minimize" htmlFor="player-minimize-checkbox"><span></span></label>
                      <label className="close" htmlFor="player-close-button"><span></span></label>
                    </div>
                    
                    {
                      playerInterfaceBuilder(playerContext)
                    }
                  </div>
                ) : (
                  // PLAYER NOT PLAYING
                  <div></div>
                )
              }
            </div>
          )
        }
      </PlayerContext.Consumer>      
    )
  }
}

export default Player