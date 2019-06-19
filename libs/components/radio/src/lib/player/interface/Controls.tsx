import React from 'react'

import * as ui from '@aazadi/ui-kit'
import '../styles/Controls.scss'

export function Controls(context) {
  return (
    <div className="controls">
      {/* <button className="skip-back">-15s</button> */}
      
      <button className="prev">
        { ui.assets.buttons.prev() }
      </button>
      
      <button className="play-pause" onClick={ context.actions.playPause }>
        { context.state.isPaused ? ui.assets.buttons.play() : ui.assets.buttons.pause() }
      </button>
      
      <button className="next">
        { ui.assets.buttons.next() }
      </button>

      {/* <button className="skip-fwd">+15s</button> */}
    </div>
  )
}

export default Controls