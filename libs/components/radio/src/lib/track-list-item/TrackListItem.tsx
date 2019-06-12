import React, { Component } from "react";

import "./TrackListItem.scss";

export interface TrackListItemProps {
  title: string,
  subtitle: string,
  rating: number,
  trackId: string,
  style: string,
  onSelect: Function
}

export class TrackListItem extends Component<TrackListItemProps> {
  render() {
    return (
      <div className="track-list-item">
        <div className="track-art">
          <img src="" alt=""/>
        </div>

        <div className="container">
          <div className="details">
            Details
          </div>

          <div className="action">
            <div className="track-play">
              <button className="track-play-button" onClick={()=>{
                  this.props.onSelect(this.props.trackId)
                }}>
                  <img src="" alt=""/>
                  Play
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default TrackListItem;