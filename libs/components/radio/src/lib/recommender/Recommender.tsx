import React, { Component } from 'react'

import * as ui from '@aazadi/ui-kit'
import './Recommender.scss'

import TrackListItem from '../track-list-item/TrackListItem'
import Loading from '../loading/Loading'
import PlayerContext from '../player-context/PlayerContext';

export interface RecommenderProps {
  title: string,
  context: {
    contextType: string,
    playingTrackId: string,
    caller: any
  },
  listType: string,
  listStyle: string,
  omitTracks: object,
  playTrack: Function
}

export class Recommender extends Component<RecommenderProps> {
  state = {
    contextual: false,
    contextState: {
      context: {
        contextType: 'none',
        playingTrackId: null,
        caller: null,
      },
      listType: 'scroll',
      listStyle: 'vertical',
      omitTracks: null,
    },
    loadedRecommendationList: true,
    recommendations: [
      // From the DB
    ]
  }

  componentWillMount() {
    let contextuality = false
    if(this.props.context!==null)
      contextuality = true

    this.setState({
      contextual: contextuality,
      contextState: {
        context: this.props.context,
        listType: this.props.listType,
        listStyle: this.props.listStyle,
        omitTracks: this.props.omitTracks
      }
    })
  }

  componentDidMount() {    
    // TODO: Get items from MongoDB based on
    // 1. context
    // 2. playing track
    const { contextType } = this.state.contextState.context

    let loadedRecommendations = []
    if(contextType==='none') {
      console.log('Top Listings')
    } else {
      if(contextType==='home') {
        console.log('Relevent Tracks', this.state.contextState.context)
      }
    }

    loadedRecommendations.push(
      {
        title: 'Episode 1',
        subtitle: 'Lets Go',
        rating: 1000,
        artURL: 'trackartURL',
        trackId: '1a23fa6'
      },
      {
        title: 'Episode 2',
        subtitle: 'Lets Go AGAIN',
        rating: 1500,
        artURL: 'trackartURL',
        trackId: '2b350b7'
      },
      {
        title: 'Episode 3',
        subtitle: 'Lets Go AGAIN',
        rating: 1500,
        artURL: 'trackartURL',
        trackId: '3c461c8'
      },
      {
        title: 'Episode 4',
        subtitle: 'Lets Go AGAIN',
        rating: 1500,
        artURL: 'trackartURL',
        trackId: '4d572d9'
      }
    )
    
    // for(let i=0; i<this.props.omitTracks.length; i++) {
    //   // loadedRecommendations.splice(loadedRecommendations.indexOf(this.props.omitTracks[i]), 1)
    //   delete loadedRecommendations[loadedRecommendations.indexOf(this.props.omitTracks[i])]
    // }

    this.setState({
      recommendations: loadedRecommendations
    })
  }

  loadRecommendations = async () => {

  }

  render() {
    const { listStyle } = this.state.contextState
    const listRecommedations = this.state.recommendations.map((track, index)=>{
      return (
        <TrackListItem
            key={ index }
            title={ track.title }
            subtitle={ track.subtitle }
            rating={ track.rating }
            artURL={ track.artURL }
            trackId={ track.trackId }
            style={ listStyle }
            onSelect={(trackId)=>{
              this.props.playTrack(trackId, {
                title: track.title,
                subtitle: track.subtitle,
                rating: track.rating,
                artURL: track.artURL
              })
            }}
          />
      )
    })

    function listBuilder() {
      if(listStyle==='vertical') {
        return (
          <div className="vertical-list-container">
            {
              listRecommedations
            }
          </div>
        )
      }
      else if(listStyle==='horizontal') {
        return (
          <div className="horizontal-list-container">
            {
              listRecommedations
            }
          </div>
        )
      }
    }

    return (
      <PlayerContext.Consumer>
        {
          playerContext => (
            <div className="recommender">
              <div className="recommender-title">
                <p>{ this.props.title }</p>
              </div>

              <div className="recommender-container">
                {
                  this.state.loadedRecommendationList ? (
                    listBuilder()
                  ) : (
                    <Loading 
                        timeout={ 2500 }
                      />
                  )
                }
              </div>
            </div>
          )
        }
      </PlayerContext.Consumer>
    )
  }
}

export default Recommender