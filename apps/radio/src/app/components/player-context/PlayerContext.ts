import React from 'react'

export const PlayerContext = React.createContext({
  state: {
    isPlaying: false,
    isPaused: true,
    isMinimized: false,
    mediaLoaded: false,
    playTrack: {
      id: '0x0000',
      title: '',
      subtitle: '',
      rating: 0,
      artURL: '',
    },
    stateChangeRequested: false,
    requestedState: {
      trackId: '0x000f'
    }
  },
  actions: {
    playPause: () => {
      console.log('PAUSE')
    },
    scrub: () => {
      console.log('SCRUB')
    },
    playTrack: (trackId: string, availableProps: any) => {
      console.log(trackId)
    },
    acknowledgeStateChange: () => {
      console.log('ACKNOWLEDGED')
    },
    minimizePlayer: () => {
      console.log('MINIMIZE')
    },
    closePlayer: () => {
      console.log('CLOSE')
    }
  }
})

export default PlayerContext