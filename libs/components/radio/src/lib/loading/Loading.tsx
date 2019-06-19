import React, { Component } from 'react'

import './Loading.scss'

export interface LoadingProps {
  timeout?: number
}

export class Loading extends Component<LoadingProps> {
  render() {
    return (
      <div className="loading">
        <div className="spinner"></div>
      </div>
    )
  }
}

export default Loading