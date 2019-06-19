import React, { Component } from 'react'

import '../Radio.scss'

import { Recommender, Search } from '@aazadi/components/radio'
import { PlayerContext } from '@aazadi/components/radio'

export default class Episodes extends Component {
  state = {
    searching: false,
    searchQuery: null,
    searchResultLoaded: false,
    searchResult: []
  }

  render() {
    return (
      <PlayerContext.Consumer>
        {
          playerContext => (
            <div>
              <h1>Episodes</h1>

              <Recommender title={ 'Top Episodes' }
                context={{
                  contextType: 'top',
                  caller: Episodes
                }}
                listType={ 'scroll' } listStyle={ 'horizontal' } limit={ 4 }
                action={ playerContext.actions.playTrack }
              />
              
              <div className="search-container">
                <Search/>
              </div>

              <Recommender title="All Episodes"
                context={{
                  contextType: 'none',
                  caller: Episodes
                }}
                listType={ 'scroll' } listStyle={ 'vertical' } limit={ 15 }
                action={ playerContext.actions.playTrack }
              />
            </div>
          )
        }        
      </PlayerContext.Consumer>
      
    )
  }
}
