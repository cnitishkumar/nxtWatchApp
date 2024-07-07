import {Component} from 'react'
import {HiFire} from 'react-icons/hi'
import Cookies from 'js-cookie'

import Header from '../Header'
import AppContext from '../../Context/AppContext'
import SideBar from '../SideBar'
import TrendingVideoItem from '../TrendingVideoItem'
import LoadingView from '../LoadingView'
import FailureView from '../FailureView'

import {
  TrendingComponentContainer,
  MainContainer,
  TrendingHeader,
  TrendingHeading,
  TrendingIconContainer,
  UlEl,
} from './StyledTrending'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Trending extends Component {
  state = {vidoesList: [], apiStatus: apiStatusConstants.initial}

  componentDidMount() {
    return (
      <>
        {this.getData()}
        <AppContext.Consumer>
          {value => {
            const {changeTab} = value
            changeTab('trending')
          }}
        </AppContext.Consumer>
      </>
    )
  }

  getData = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')

    const apiUrl = 'https://apis.ccbp.in/videos/trending'

    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const formatData = data => ({
      channel: {
        channelName: data.channel.name,
        profileImageUrl: data.channel.profile_image_url,
      },
      id: data.id,
      publishedAt: data.published_at,
      thumbnailUrl: data.thumbnail_url,
      title: data.title,
      viewCount: data.view_count,
    })

    const response = await fetch(apiUrl, options)
    if (response.ok === true) {
      const videosData = await response.json()

      const formattedData = videosData.videos.map(each => formatData(each))
      console.log(videosData)
      console.log(formattedData)
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
      <UlEl isDark={isDark}>
        {videosList.map(each => (
          <TrendingVideoItem key={each.id} videoDetails={each} />
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
            <TrendingComponentContainer isDark={isDark} data-testid="trending">
              {' '}
              <Header />
              <MainContainer isDark={isDark}>
                <SideBar />
                <div>
                  <TrendingHeader isDark={isDark}>
                    <TrendingIconContainer isDark={isDark}>
                      <HiFire color="#ff0000" size="25px" />
                    </TrendingIconContainer>
                    <TrendingHeading isDark={isDark}>Trending</TrendingHeading>
                  </TrendingHeader>
                  {this.renderTrendingPage(isDark)}
                </div>
              </MainContainer>
            </TrendingComponentContainer>
          )
        }}
      </AppContext.Consumer>
    )
  }
}

export default Trending
