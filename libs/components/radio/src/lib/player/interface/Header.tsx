import React, { Component } from 'react'

export interface HeaderProps {
  context: any
}

export class Header extends Component<HeaderProps> {
  playerContext = this.props.context
  render() {
    return (
      <div className="header">
        <div className="top-controls">
          <input hidden type="checkbox" id="player-minimize-checkbox" onChange={ this.playerContext.actions.minimizePlayer }/>
          <button hidden type="checkbox" id="player-close-button" onClick={ this.playerContext.actions.closePlayer }>CLOSE</button>
          <label className="minimize" htmlFor="player-minimize-checkbox"><span></span></label>
          <label className="close" htmlFor="player-close-button"><span></span></label>
        </div>
      </div>
    )
  }  
}

export default Header