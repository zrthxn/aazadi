import React, { Component } from 'react'

import './Login.scss'

export class Login extends Component {
  render() {
    return (
      <div className="login">
        <input className="textbox" type="text" placeholder="Password"/>
        <button className="button solid">LOGIN</button>
      </div>
    )
  }
}

export default Login
