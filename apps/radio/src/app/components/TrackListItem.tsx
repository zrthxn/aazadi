import React, { Component } from 'react'

import '../static/scss/TrackListItem.scss'

export default class TrackListItem extends Component {
  render() {
    return (
      <div className="track-list-item">
        <div className="container">
          <div className="details">
            Details
          </div>

          <div className="action">
            <div className="track-play">
              <button>Play</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
