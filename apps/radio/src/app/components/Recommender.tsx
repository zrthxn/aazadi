import React, { Component } from 'react'

import '../static/scss/Recommender.scss'
import '../Global.scss'

import { RecommenderProps } from '@aazadi/radio-interfaces'

// interface RecommendationProps {
//   context: object,
//   listType: string,
//   omitTracks: object
// }

export default class Recommender extends Component<RecommenderProps> {
  state = {
    contextual: false,
    contextState: {
      context: {
        contextType: 'none',
        playingTrackId: null,
        caller: null,
      },
      listType: 'scroll',
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
        omitTracks: this.props.omitTracks
      }
    })
  }

  componentDidMount() {    
    // TODO: Get items from MongoDB based on
    // 1. context
    // 2. 
    if(this.state.contextState.context.contextType==='none'){
      console.log('Top Listings')
    } else {
      console.log('Relevent Tracks', this.state.contextState.context)
    }

    this.setState({
      recommendations: [

      ]
    })
  }

  render() {
    const listRecommedations = this.state.recommendations.map(()=>{
      return (
        <RecommendationListItem />
      )
    })

    return (
      <div className="recommender-container">
        <div className="recommeder-title">
          <h3>Recommender</h3>
        </div>

        {
          this.state.loadedRecommendationList ? (
            listRecommedations
          ) : (
            <div className="loading-animation">

            </div>
          )
        }
      </div>
    )
  }
}

class RecommendationListItem extends Component {
  render() {
    return (
      <div className="recommendation">
          
      </div>
    )
  }
}