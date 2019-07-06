import React, { Component } from 'react'

import { FullScreenInterface } from './interface/FullScreen'
import { MinimizedInterface } from './interface/Minimized'

export const Interface = {
  playerInterfaceBuilder: (playerContext) => {
    return (
      <div>
        <input hidden type="checkbox" id="player-minimize-checkbox" onChange={ playerContext.actions.minimizePlayer }/>
        <input hidden type="checkbox" id="player-closed-checkbox" onChange={ playerContext.actions.closePlayer }/>

        <div className="player">
          {
            playerContext.state.isMinimized ? (
              MinimizedInterface(playerContext)
            ) : (
              FullScreenInterface(playerContext)
            )
          }
        </div>
      </div>
      
    )
  }
}

export default Interface