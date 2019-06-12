import React, { Component } from "react";

import "./Header.scss";

/* tslint:disable:no-empty-interface */
export interface HeaderProps {}

export class Header extends Component<HeaderProps> {
  render() {
    return (
      <div>
        <p>Header</p>
      </div>
    );
  }
}

export default Header;