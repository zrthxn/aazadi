import React from 'react'

import '../styles/FullScreen.scss'

import Recommender from '../../recommender/Recommender'
import { Controls } from './Controls'
import { Scrub } from './Scrub'

export function FullScreenInterface(context) {
  return(
    // FULL PLAYER
    <div className="player-full">
      <div className="header">
        <label className="minimize" htmlFor="player-minimize-checkbox"><span></span></label>
        <label className="close" htmlFor="player-closed-checkbox"><span></span></label>
      </div>

      <div className="playTrack">
        <div className="details">
          <p className="title">{ context.state.playTrack.title }</p>
          <p className="subtitle">{ context.state.playTrack.subtitle }</p>
        </div>

        <div className="track-art">
          <div className="container">
            {
              context.state.mediaLoaded ? (
                <img className="playTrack-art-image" src="" alt=""/>
              ) : (
                <img className="loading-animation" src="" alt=""/>
              )
            }
          </div>
        </div>
      </div>

      { Scrub(context) }

      { Controls(context) }

      <Recommender 
        title={ 'Listen Next' }
        context={{
          contextType: 'track',
          playingTrackId: context.state.playTrack.id,
          caller: FullScreenInterface
        }}
        listType={ 'scroll' }
        listStyle={ 'vertical' }
        omitTracks={ null }
        playTrack={(trackId, availableProps)=>{
          context.actions.playTrack(trackId, availableProps)
        }}
      />
    </div>
  )
}

export default FullScreenInterface