import React from 'react'

export const PlayerContext = React.createContext({
  isPlaying: false,
  playTrackId: '0x0000',
  playTrack: trackId => console.log('Default', trackId),
  changeTrack: trackId => console.log('Default', trackId)
})

export default PlayerContext