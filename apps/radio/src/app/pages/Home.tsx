import React, { Component } from 'react'
import crypto from 'crypto'

// Styles
import * as ui from '@aazadi/ui-kit'
import '../../assets/scss/Home.scss'
import '../Radio.scss'

// Components
import { Recommender } from '@aazadi/components/radio'
import { PlayerContext } from '@aazadi/components/radio'

export default class Home extends Component {
  state = {

  }

  componentDidMount() {
    // TODO: Initialize & login?
  }

  render() {
    return (
      <PlayerContext.Consumer>
        {
          playerContext => (
            <div className="home-page">
              <div>
                {
                  ui.assets.elements.radioTitle()
                }
              </div>                

              <div className="recommender-container">
                <Recommender title="Top Episodes"
                  context={{
                    contextType: 'top',
                    caller: Home
                  }}
                  listType={ 'scroll' } listStyle={ 'horizontal' } limit={ 4 }
                  action={ playerContext.actions.playTrack }
                />

                <Recommender title="New Releases"
                    context={{
                      contextType: 'new',
                      caller: Home
                    }}
                    listType={ 'scroll' } listStyle={ 'vertical' } limit={ 10 }
                    action={ playerContext.actions.playTrack }
                  />
              </div>        
            </div>
          )
        }
      </PlayerContext.Consumer>
    )
  }
}