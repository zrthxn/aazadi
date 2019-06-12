import React, { Component } from 'react'

export interface LoadingProps {
  timeout: number
}

export class Loading extends Component<LoadingProps> {
  render() {
    return (
      <div className="loading">
        
      </div>
    )
  }
}

export default Loading