import React, { Component } from "react";

import * as ui from '@aazadi/ui-kit'
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
  verticalTrackListItem = () => {
    return (
      <div className="v-track-list-item">
        <div className="track-art">
          <img src="" alt=""/>
        </div>

        <div className="details">
          <div className="container">
            <p className="title">{ this.props.title }</p>
            <p className="subtitle">{ this.props.subtitle }</p>
            <p className="rating">{ this.props.rating } Plays</p>
          </div>
        </div>

        <div className="action">
          <div className="container">
            <div className="track-play">
              <button className="track-play-button" id="track-play-button" onClick={()=>{
                  this.props.onSelect(this.props.trackId)
                }}>
                  { ui.assets.buttons.play() }
              </button>
            </div>
          </div>  
        </div>
      </div>
    )
  }

  horizontalTrackListItem = () => {
    return (
      <div className="h-track-list-item">
        <div className="track-art">
          <img src="" alt=""/>
        </div>

        <div className="details">
          <div className="container">
            <p className="title">{ this.props.title }</p>
            <p className="subtitle">{ this.props.subtitle }</p>
          </div>
        </div>

        <div className="action" onClick={()=>{ this.props.onSelect(this.props.trackId) }} />
      </div>
    )
  }

  render() {
    return (
      <div>
        {
          this.props.style==='vertical' ? (
            this.verticalTrackListItem()
          ) : (
            this.props.style==='horizontal' ? (
              this.horizontalTrackListItem()
            ) : (
              <div></div>
            )
          )
        }
      </div>
    )
  }
}

export default TrackListItem;