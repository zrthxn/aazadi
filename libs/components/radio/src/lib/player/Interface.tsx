import React, { Component } from 'react'

import Recommender from '../recommender/Recommender'

import { Header } from './interface/Header'
import { FullScreenInterface } from './interface/FullScreen'
import { MinimizedInterface } from './interface/Minimized'

export const Interface = {
  playerInterfaceBuilder: (playerContext) => {
    return (
      <div className="player">
        <Header context={ playerContext }/>
        {
          playerContext.state.isMinimized ? (
            MinimizedInterface(playerContext)
          ) : (
            FullScreenInterface(playerContext)
          )
        }
      </div>
    )
  }
}

export default Interface