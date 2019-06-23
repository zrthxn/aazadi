import React, { Component } from 'react'

import '../../assets/scss/LoginPage.scss'

import { Login } from '@aazadi/components/admin'

export class LoginPage extends Component {
  render() {
    return (
      <div className="login-page">
        <Login/>
      </div>
    )
  }
}

export default LoginPage