import {Component} from 'react'
import {HiHome, HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {RiMenuAddFill} from 'react-icons/ri'

import {withRouter, Link} from 'react-router-dom'
import AppContext from '../../Context/AppContext'

import {
  SideBarContainer,
  SideBarBtn,
  StyledIcon,
  ContactUsSection,
  SocialIconsCard,
  SocialIcon,
  TextContent,
  Title,
} from './StyledSideBar'

import './index.css'

const tabConstants = {
  home: 'HOME',
  gaming: 'GAMING',
  trending: 'TRENDING',
  savedVideos: 'SAVED_VIDEOS',
}

class SideBar extends Component {
  render() {
    return (
      <AppContext.Consumer>
        {value => {
          const {isDark, changeTab, activeTab} = value

          const onClickChangeTab = tab => {
            changeTab(tab)
          }

          return (
            <SideBarContainer isDark={isDark}>
              <ul className="side-bar-ul-el">
                <Link to="/" className="side-bar-link-item">
                  <li className="ide-bar-li-el" key={tabConstants.home}>
                    <SideBarBtn
                      isDark={isDark}
                      isActive={activeTab === tabConstants.home}
                      type="button"
                      onClick={() => onClickChangeTab(tabConstants.home)}
                    >
                      <HiHome
                        className="side-bar-icon"
                        color={
                          activeTab === tabConstants.home ? ' #ff0b37' : ''
                        }
                      />
                      Home
                    </SideBarBtn>
                  </li>
                </Link>
                <Link to="/trending" className="side-bar-link-item">
                  <li className="ide-bar-li-el" key={tabConstants.trending}>
                    <SideBarBtn
                      isDark={isDark}
                      isActive={activeTab === tabConstants.trending}
                      type="button"
                      onClick={() => onClickChangeTab(tabConstants.trending)}
                    >
                      <HiFire
                        className="side-bar-icon"
                        color={
                          activeTab === tabConstants.trending ? ' #ff0b37' : ''
                        }
                      />
                      Trending
                    </SideBarBtn>
                  </li>
                </Link>

                <Link to="/gaming" className="side-bar-link-item">
                  <li className="ide-bar-li-el" key={tabConstants.gaming}>
                    <SideBarBtn
                      isDark={isDark}
                      isActive={activeTab === tabConstants.gaming}
                      type="button"
                      onClick={() => onClickChangeTab(tabConstants.gaming)}
                    >
                      <SiYoutubegaming
                        className="side-bar-icon"
                        color={
                          activeTab === tabConstants.gaming ? ' #ff0b37' : ''
                        }
                      />
                      Gaming
                    </SideBarBtn>
                  </li>
                </Link>

                <Link to="/saved-videos" className="side-bar-link-item">
                  <li className="side-bar-li-el" key={tabConstants.savedVideos}>
                    <SideBarBtn
                      isDark={isDark}
                      isActive={activeTab === tabConstants.savedVideos}
                      type="button"
                      onClick={() => onClickChangeTab(tabConstants.savedVideos)}
                    >
                      <RiMenuAddFill
                        className="side-bar-icon"
                        color={
                          activeTab === tabConstants.savedVideos
                            ? ' #ff0b37'
                            : ''
                        }
                      />
                      SavedVideos
                    </SideBarBtn>
                  </li>
                </Link>
              </ul>

              <ContactUsSection>
                <Title isDark={isDark}>Contact Us</Title>
                <SocialIconsCard>
                  <SocialIcon
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                    alt="facebook logo"
                  />
                  <SocialIcon
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                    alt="twitter logo"
                  />
                  <SocialIcon
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                    alt="linked in logo"
                  />
                </SocialIconsCard>
                <TextContent isDark={isDark}>
                  Enjoy! Now to see your channels and recommendations!
                </TextContent>
              </ContactUsSection>
            </SideBarContainer>
          )
        }}
      </AppContext.Consumer>
    )
  }
}

export default withRouter(SideBar)
