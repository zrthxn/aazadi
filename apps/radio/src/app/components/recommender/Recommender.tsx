import React, { Component } from 'react'

import * as ui from '@aazadi/ui-kit'
import './Recommender.scss'

import TrackListItem from '../track-list-item/TrackListItem'
import Loading from '../loading/Loading'
import PlayerContext from '../player-context/PlayerContext';

import { RecommendationService } from '@aazadi/features/api'

export interface RecommenderProps {
  title: string,
  context: {
    contextType: string,
    playingTrackId?: string,
    caller: any
  },
  listType: string,
  listStyle: string,
  action: Function,
  limit: number,
  omitTracks?: [string],
  recommendations?: any,
}

export class Recommender extends Component<RecommenderProps> {
  state = {
    contextual: false,
    contextState: {
      context: {
        contextType: 'none', // OPTIONS : none=all / home / top / new / track / search
        playingTrackId: null,
        caller: null,
      },
      listType: 'scroll', // OR 'lazy'
      listStyle: 'vertical', // OR 'horizontal'
      omitTracks: [],
    },
    loadedRecommendationList: false,
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
    const { contextType } = this.state.contextState.context

    let loadedRecommendations = []

    if(contextType==='search') {
      loadedRecommendations = this.props.recommendations
    } else {
      const subscriber = RecommendationService.get({
        contextType
      }).subscribe(obj => {
        loadedRecommendations.push(obj)
        if(loadedRecommendations.length===this.props.limit) {
          subscriber.unsubscribe()

          if(this.state.contextState.omitTracks!==undefined)
            this.state.contextState.omitTracks.forEach(omitTrackId => {
              loadedRecommendations = loadedRecommendations.filter(
                track => track.trackId !== omitTrackId
              )
            })

          this.setState({
            recommendations: loadedRecommendations,
            loadedRecommendationList: true
          })
        }
      })
    }
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
              this.props.action(trackId, {
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
                    <Loading/>
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