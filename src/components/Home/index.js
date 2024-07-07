import {Component} from 'react'
import Cookies from 'js-cookie'
import {BiSearchAlt} from 'react-icons/bi'

import Header from '../Header'
import SideBar from '../SideBar'
import FailureView from '../FailureView'
import AppContext from '../../Context/AppContext'
import {
  HomeContainer,
  HomeComponentContainer,
  UlEl,
  SearchBarContainer,
  SearchInput,
  SearchBtn,
  NoSearchResultContainer,
  NoSearchResultImage,
  NoSearchResultHeading,
  NoSearchResultDescription,
  RetryButton,
  Div,
} from './StyledHome'
import HomeVideoItem from '../HomeVideoItem'
import LoadingView from '../LoadingView'
import BannerItem from '../BannerItem'
import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Home extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    searchInput: '',
    videosData: [],
  }

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const {searchInput} = this.state
    this.setState({apiStatus: apiStatusConstants.inProgress})

    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(apiUrl, options)

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

    if (response.ok === true) {
      const data = await response.json()

      const formattedData = data.videos.map(each => formatData(each))

      //   console.log(formattedData)
      this.setState({
        apiStatus: apiStatusConstants.success,
        videosData: formattedData,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  renderSuccessView = isDark => {
    const {videosData} = this.state

    return (
      <UlEl isDark={isDark}>
        {videosData.map(each => (
          <HomeVideoItem key={each.id} videoDetails={each} />
        ))}
      </UlEl>
    )
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onCLickSearchBtn = () => {
    this.getData()
  }

  renderSearchBar = isDark => {
    const {searchInput} = this.state
    return (
      <SearchBarContainer isDark={isDark}>
        <SearchInput
          isDark={isDark}
          type="search"
          value={searchInput}
          onChange={this.onChangeSearchInput}
          placeholder="Search"
          className="search"
        />
        <SearchBtn isDark={isDark} onClick={this.onCLickSearchBtn}>
          <BiSearchAlt />
        </SearchBtn>
      </SearchBarContainer>
    )
  }

  renderFailureView = () => <FailureView getData={this.getData} />

  renderLoader = () => <LoadingView />

  onClickRetryBtn = () => {
    this.setState({searchInput: ''}, this.getData)
  }

  renderNoSearchResultsView = isDark => (
    <NoSearchResultContainer>
      <NoSearchResultImage
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
        alt="no videos"
      />
      <NoSearchResultHeading isDark={isDark}>
        No Search results found
      </NoSearchResultHeading>
      <NoSearchResultDescription isDark={isDark}>
        Try different key words or remove search filter
      </NoSearchResultDescription>
      <RetryButton type="button" onClick={this.onClickRetryBtn}>
        Retry
      </RetryButton>
    </NoSearchResultContainer>
  )

  renderHomePage = isDark => {
    const {apiStatus, videosData} = this.state

    const videosListLenght = videosData.length

    switch (apiStatus) {
      case apiStatusConstants.success:
        return videosListLenght === 0
          ? this.renderNoSearchResultsView(isDark)
          : this.renderSuccessView(isDark)
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
            <HomeComponentContainer data-testid="home">
              <Header />

              <HomeContainer isDark={isDark}>
                <SideBar />
                <Div>
                  <div data-testid="banner">
                    <BannerItem />
                  </div>

                  {this.renderSearchBar(isDark)}
                  {this.renderHomePage(isDark)}
                </Div>
              </HomeContainer>
            </HomeComponentContainer>
          )
        }}
      </AppContext.Consumer>
    )
  }
}

export default Home
