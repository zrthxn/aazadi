import React, { Component } from 'react'

// import '../Global.scss'
import './Recommender.scss'

import TrackListItem from '../track-list-item/TrackListItem'
import Loading from '../loading/Loading'

export interface RecommenderProps {
  context: {
    contextType: string,
    playingTrackId: string,
    caller: any
  },
  listType: string,
  listStyle: string,
  omitTracks: object,
  changeTrack: Function
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
    // TODO: Get items from MongoDB based on
    // 1. context
    // 2. playing track
    const { contextType } = this.state.contextState.context
    if(contextType==='none'){
      console.log('Top Listings')
    } else {
      // if()
      console.log('Relevent Tracks', this.state.contextState.context)
    }

    this.setState({
      recommendations: [

      ]
    })
  }

  render() {
    function listBuilder() {
      const { listStyle } = this.state.contextState
      const listRecommedations = this.state.recommendations.map((track, index)=>{
        return (
          <TrackListItem
              title={ track[index].title }
              subtitle={ track[index].subtitle }
              rating={ track[index].rating }
              trackId={ track[index].trackId }
              style={ listStyle }
              onSelect={(trackId)=>{
                // Switch track somehow
                this.props.changeTrack(trackId)
              }}
            />
        )
      })

      if(listStyle==='vertical') {
        return (
          <div className="vertical-list-container">
            listRecommedations
          </div>
        )
      }
      else if(listStyle==='horizontal') {
        return (
          <div className="horizontal-list-container">
            listRecommedations
          </div>
        )
      }
    }

    return (
      <div className="recommender-container">
        <div className="recommeder-title">
          <h3>Recommender</h3>
        </div>

        {
          this.state.loadedRecommendationList ? (
            listBuilder()
          ) : (
            <Loading />
          )
        }
      </div>
    )
  }
}

export default Recommender