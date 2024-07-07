import {Component} from 'react'
import Cookies from 'js-cookie'

import {Redirect} from 'react-router-dom'

import AppContext from '../../Context/AppContext'

import {
  LoginContainer,
  InputEl,
  LabelEl,
  LabelElCheckbox,
  LoginComponentContainer,
  LoginButton,
} from './StyledLogin'

import './index.css'

class Login extends Component {
  state = {
    showPassword: false,
    username: '',
    password: '',
    showErrMsg: false,
    errorMsg: '',
  }

  onSubmitLoginForm = async event => {
    event.preventDefault()
    const {username, password} = this.state

    const userDetails = {username, password}

    const loginApi = 'https://apis.ccbp.in/login'

    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(loginApi, options)
    const data = await response.json()
    if (response.ok === true) {
      const jwtToken = data.jwt_token
      Cookies.set('jwt_token', jwtToken, {expires: 30})

      const {history} = this.props
      await this.setState({username: '', password: ''})
      history.replace('/')
    } else {
      this.setState({showErrMsg: true, errorMsg: data.error_msg})
    }
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onChangeShowPassword = event => {
    this.setState({showPassword: event.target.checked})
  }

  onChangeUserName = event => {
    this.setState({username: event.target.value})
  }

  renderLoginForm = isDark => {
    const {username, password, showPassword, showErrMsg, errorMsg} = this.state

    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <LoginComponentContainer isDark={isDark}>
        <LoginContainer isDark={isDark}>
          <div className="website-logo-container">
            <img
              src={
                isDark
                  ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
              }
              alt="website logo"
              className="website-logo"
            />
          </div>
          <form className="form-el" onSubmit={this.onSubmitLoginForm}>
            <LabelEl isDark={isDark} htmlFor="usernameInput">
              USERNAME
            </LabelEl>
            <InputEl
              isDark={isDark}
              type="text"
              id="usernameInput"
              placeholder="Username"
              value={username}
              onChange={this.onChangeUserName}
            />
            <LabelEl isDark={isDark} htmlFor="passwordInput">
              PASSWORD
            </LabelEl>
            <InputEl
              isDark={isDark}
              type={showPassword ? 'text' : 'password'}
              id="passwordInput"
              placeholder="Password"
              value={password}
              onChange={this.onChangePassword}
            />
            <div className="checkbox-container">
              <input
                type="checkbox"
                id="showPassword"
                value={showPassword}
                onChange={this.onChangeShowPassword}
              />
              <LabelElCheckbox isDark={isDark} htmlFor="showPassword">
                Show Password
              </LabelElCheckbox>
            </div>
            <LoginButton type="submit">Login</LoginButton>
            {showErrMsg && <p className="error-msg">{errorMsg}</p>}
          </form>
        </LoginContainer>
      </LoginComponentContainer>
    )
  }

  render() {
    return (
      <AppContext.Consumer>
        {value => {
          const {isDark} = value
          return this.renderLoginForm(isDark)
        }}
      </AppContext.Consumer>
    )
  }
}

export default Login
