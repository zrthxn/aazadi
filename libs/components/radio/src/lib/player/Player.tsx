import React, { Component } from 'react'

import * as ui from '@aazadi/ui-kit'
import './styles/Player.scss'

// Components
import PlayerContext from '../player-context/PlayerContext'

import { Interface } from './Interface'
import { StreamController, PlayerController } from '@aazadi/features/api'

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

  loadTrack = async (trackId: string, availableProps: object) => {
    let loadedTrack = { title: null, subtitle: null, rating: null, artURL: null }
    
    let fetchDataQueue = []
    for(const prop in availableProps)
      if (availableProps.hasOwnProperty(prop))
        loadedTrack[prop] = availableProps[prop]

    for(const prop in loadedTrack)
      if (loadedTrack.hasOwnProperty(prop))
        if(loadedTrack[prop]===null)
          fetchDataQueue.push(prop)

    // LOAD FROM SERVER DB
    if(fetchDataQueue.length!==0)
      loadedTrack = await PlayerController.loadTrackData(trackId, fetchDataQueue)
    
    this.setState((prevState, props)=>({
      playTrack: {
        id: trackId,
        title: loadedTrack.title,
        subtitle: loadedTrack.subtitle,
        rating: loadedTrack.rating,
        artURL: loadedTrack.artURL,
      }
    }))

    StreamController.newStream(trackId)
    
    return loadedTrack
  }

  getTrackArt = async () => {
    // LOAD MEDIA FROM DB OR IMAGE
    await PlayerController.loadTrackArt(this.state.playTrack.id)
  }

  playTrack = () => {

  }

  render() {
    return (
      <PlayerContext.Consumer>
        {
          playerContext => (
            <div key={ playerContext.state.playTrack.id }>
              {
                playerContext.state.isPlaying ? (
                  Interface.playerInterfaceBuilder(playerContext)
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