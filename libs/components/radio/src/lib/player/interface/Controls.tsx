import React from 'react'

import * as ui from '@aazadi/ui-kit'
import '../styles/Controls.scss'

export function Controls(context) {
  return (
    <div className="controls">
      <button className="skip-back">-15s</button>
      
      <button className="previous">{'|<'}</button>
      <button className="play-pause" onClick={ context.actions.playPause }>||</button>
      <button className="next">{'>|'}</button>

      <button className="skip-fwd">+15s</button>
    </div>
  )
}

export default Controls