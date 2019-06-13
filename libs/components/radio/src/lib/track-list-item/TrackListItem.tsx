import React, { Component } from "react";

import "./TrackListItem.scss";

export interface TrackListItemProps {
  title: string,
  subtitle: string,
  rating: number,
  artURL: string,
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
            <div>
              <p>
                <b>{ this.props.title } </b><br/>
                { this.props.subtitle } <br/>
                { this.props.rating }
              </p>
            </div>
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
        <hr/>
      </div>
    )
  }
}

export default TrackListItem;