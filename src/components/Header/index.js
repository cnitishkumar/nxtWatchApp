import './index.css'
import {Component} from 'react'

import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'
import {Link, withRouter} from 'react-router-dom'
import {FaMoon} from 'react-icons/fa'
import {IoMdSunny} from 'react-icons/io'
import {TiHome} from 'react-icons/ti'
import {HiFire} from 'react-icons/hi'
import {RiMenuAddFill} from 'react-icons/ri'

import AppContext from '../../Context/AppContext'

import {
  NavBar,
  NavThemeButton,
  LogoutBtn,
  PopupContainer,
  LogoutMessage,
} from './StyledHeader'

class Header extends Component {
  renderLogoutPop = isDark => {
    const onClickLogoutBtn = () => {
      const {history} = this.props
      Cookies.remove('jwt_token')
      history.replace('/login')
    }

    return (
      <div>
        <Popup
          modal
          trigger={
            <LogoutBtn type="button" dark={isDark}>
              Logout
            </LogoutBtn>
          }
        >
          {close => (
            <PopupContainer isDark={isDark}>
              <LogoutMessage dark={isDark}>
                Are you sure, you want to logout?
              </LogoutMessage>
              <div>
                <LogoutBtn dark={isDark} type="button" onClick={() => close()}>
                  Cancel
                </LogoutBtn>

                <LogoutBtn
                  dark={isDark}
                  type="button"
                  onClick={onClickLogoutBtn}
                >
                  Confirm
                </LogoutBtn>
              </div>
            </PopupContainer>
          )}
        </Popup>
      </div>
    )
  }

  //   NAV BAR

  renderNavBar = (changeTheme, isDark) => {
    const onClickChangeThemeBtn = () => {
      changeTheme()
    }

    return (
      <NavBar dark={isDark}>
        <Link to="/" className="nav-link-el">
          <img
            src={
              isDark
                ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
            }
            alt="website logo"
            className="website-logo-navbar"
          />
        </Link>
        <ul className="nav-ul-el">
          <li className="nav-list-item">
            <NavThemeButton
              type="button"
              data-testid="theme"
              dark={isDark}
              onClick={onClickChangeThemeBtn}
            >
              {isDark ? (
                <IoMdSunny className="theme-icon" />
              ) : (
                <FaMoon alt="moon" className="theme-icon" />
              )}
            </NavThemeButton>
          </li>
          <li className="nav-list-item">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
              alt="profile"
              className="profile-img"
            />
          </li>
          <li className="nav-list-item">{this.renderLogoutPop(isDark)}</li>
        </ul>
      </NavBar>
    )
  }

  render() {
    return (
      <AppContext.Consumer>
        {value => {
          const {changeTheme, isDark} = value

          return this.renderNavBar(changeTheme, isDark)
        }}
      </AppContext.Consumer>
    )
  }
}

export default withRouter(Header)
