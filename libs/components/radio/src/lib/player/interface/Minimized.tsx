import React from 'react'

export function MinimizedInterface(context) {
  return(
    // MNIMIZED PLAYER
    <div className="player-min">
      <p className="playTrack-name">{ context.state.playTrack.title }</p>
      <div className="playTrack">
        <div className="playTrack-details">
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

export default MinimizedInterface