import React, { Component } from 'react'

import * as ui from '@aazadi/ui-kit'
import '../Radio.scss'

// Components
import { Subscribe } from '@aazadi/components/radio'

export default class Subscription extends Component {
  state = {

  }

  componentDidMount() {
    // TODO: Prepare for subscription
  }

  render() {
    return (
      <div className="subscribe-page">
        <h1>Subscribe</h1>

        <Subscribe />
      </div>
    )
  }
}