// const play = require('./buttons/Play.svg') as any
// const pause = require('./buttons/Pause.svg') as any
// const next = require('./buttons/Next.svg') as any
// const prev = require('./buttons/Prev.svg') as any

import { play, pause, next, prev } from './buttons/buttons'
import { radioTitle } from './elements/radioTitle'

export const assets = {
  buttons: {
    play,
    pause,
    next,
    prev
  },
  elements: {
    radioTitle
  }
}