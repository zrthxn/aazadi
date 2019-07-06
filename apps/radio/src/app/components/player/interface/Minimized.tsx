import React from 'react'

import '../styles/Minimized.scss'

export function MinimizedInterface(context) {
  return(
    // MNIMIZED PLAYER
    <div className="player-min">
      <label className="minimize" htmlFor="player-minimize-checkbox"></label>

      <div className="min-playTrack">
        <div className="min-details">
          <p className="title">{ context.state.playTrack.title }</p>
          <p className="subtitle">{ context.state.playTrack.subtitle }</p>
        </div>
      </div>

      <div className="min-track-art">
        {
          context.state.mediaLoaded ? (
            <img className="playTrack-art-image" src="" alt=""/>
          ) : (
            <img className="loading-animation" src="" alt=""/>
          )
        }
      </div>

      <label className="close" htmlFor="player-closed-checkbox"><span></span></label>
    </div>
  )
}

export default MinimizedInterface