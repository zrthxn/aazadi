import React, { Component } from 'react'

// import '../Global.scss'
import './Recommender.scss'

import TrackListItem from '../track-list-item/TrackListItem'
import Loading from '../loading/Loading'
import PlayerContext from '../player-context/PlayerContext';

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
    recommendationsTitle: 'Recommender',
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
      {
        title: 'Episode 1',
        subtitle: 'Lets go',
        rating: 10000,
        trackId: 'ABCDEF'
      }
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

    // this.setState({
    //   recommendations: [
        
    //   ]
    // })
  }

  render() {
    const { listStyle } = this.state.contextState
    const listRecommedations = this.state.recommendations.map((track, index)=>{
      return (
        <TrackListItem
            key={ index }
            title={ this.state.recommendations[index].title }
            subtitle={ this.state.recommendations[index].subtitle }
            rating={ this.state.recommendations[index].rating }
            trackId={ this.state.recommendations[index].trackId }
            style={ listStyle }
            onSelect={(trackId)=>{
              // Switch track somehow
              this.props.changeTrack(trackId)
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
            <div className="recommender-container">
              <div className="recommeder-title">
                <h3>{ this.state.recommendationsTitle }</h3>
              </div>

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
          )
        }
      </PlayerContext.Consumer>
    )
  }
}

export default Recommender