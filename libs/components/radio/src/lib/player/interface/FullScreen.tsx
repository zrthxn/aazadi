import React from 'react'

export function FullScreenInterface(context) {
  return(
    // FULL PLAYER
    <div className="player-full">
        <div className="playTrack">
          <div className="playTrack-details">
            <p className="playTrack-name">{ context.state.playTrack.title }</p>
            <p className="playTrack-subtitle">{ context.state.playTrack.subtitle }</p>
          </div>

          <div className="playTrack-art">
            <div className="playTrack-art-container">
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
    </div>
  )
}

export default FullScreenInterface