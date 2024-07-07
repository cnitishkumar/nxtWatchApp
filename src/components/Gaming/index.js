import {Component} from 'react'
import {SiYoutubegaming} from 'react-icons/si'
import Cookies from 'js-cookie'

import Header from '../Header'
import AppContext from '../../Context/AppContext'
import SideBar from '../SideBar'
import LoadingView from '../LoadingView'
import FailureView from '../FailureView'
import GamingItem from '../GamingItem'

import {
  GamingComponentContainer,
  MainContainer,
  GamingHeader,
  GamingHeading,
  GamingIconContainer,
  UlEl,
} from './StyledGaming'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Gaming extends Component {
  state = {vidoesList: [], apiStatus: apiStatusConstants.initial}

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')

    const apiUrl = 'https://apis.ccbp.in/videos/gaming'

    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const formatData = data => ({
      id: data.id,
      thumbnailUrl: data.thumbnail_url,
      title: data.title,
      viewCount: data.view_count,
    })

    const response = await fetch(apiUrl, options)
    if (response.ok === true) {
      const videosData = await response.json()

      const formattedData = videosData.videos.map(each => formatData(each))

      this.setState({
        apiStatus: apiStatusConstants.success,
        videosList: formattedData,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  renderSuccessView = isDark => {
    const {videosList} = this.state

    return (
      <UlEl>
        {videosList.map(each => (
          <GamingItem key={each.id} gamingDetails={each} />
        ))}
      </UlEl>
    )
  }

  renderFailureView = () => <FailureView getData={this.getData} />

  renderLoader = () => <LoadingView />

  renderTrendingPage = isDark => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderSuccessView(isDark)
      case apiStatusConstants.inProgress:
        return this.renderLoader(isDark)

      case apiStatusConstants.failure:
        return this.renderFailureView(isDark)

      default:
        return null
    }
  }

  render() {
    return (
      <AppContext.Consumer>
        {value => {
          const {isDark} = value

          return (
            <GamingComponentContainer isDark={isDark} data-testid="trending">
              {' '}
              <Header />
              <MainContainer isDark={isDark}>
                <SideBar />
                <div>
                  <GamingHeader isDark={isDark}>
                    <GamingIconContainer isDark={isDark}>
                      <SiYoutubegaming color="#ff0000" size="25px" />
                    </GamingIconContainer>
                    <GamingHeading isDark={isDark}>Gaming</GamingHeading>
                  </GamingHeader>
                  {this.renderTrendingPage(isDark)}
                </div>
              </MainContainer>
            </GamingComponentContainer>
          )
        }}
      </AppContext.Consumer>
    )
  }
}

export default Gaming
