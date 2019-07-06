import React, { Component } from "react";

import "./Subscribe.scss";

/* tslint:disable:no-empty-interface */
export interface SubscribeProps {}

export class Subscribe extends Component<SubscribeProps> {
  render() {
    return (
      <div className="subscribe">
        <input className="textbox" type="text" placeholder="Email"/>
        <button className="button">Subscribe</button>
      </div>
    );
  }
}

export default Subscribe;
