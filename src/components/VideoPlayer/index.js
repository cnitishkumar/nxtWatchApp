import {Component} from 'react'
import Cookies from 'js-cookie'

import {BsDot} from 'react-icons/bs'
import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'
import {RiMenuAddLine} from 'react-icons/ri'
import {formatDistanceToNow, format} from 'date-fns'

import ReactPlayer from 'react-player/youtube'
import AppContext from '../../Context/AppContext'
import Header from '../Header'
import SideBar from '../SideBar'
import LoadingView from '../LoadingView'
import FailureView from '../FailureView'

import {
  PlayerComponentContainer,
  MainContainer,
  ReactPlayerContainer,
  VideoTitle,
  ResponsiveBottomContainer,
  Div,
  P,
  Dot,
  ActionButtonsContainer,
  ActionButtons,
  ChannelProfileImage,
  ChannelDetails,
  ChannelDescription,
  ChannelDetailsContainer,
} from './StyledPlayer'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class VideoItemDetails extends Component {
  state = {
    videoData: {},
    apiStatus: apiStatusConstants.initial,
    isLiked: false,
    isDisLiked: false,
    isSaved: false,
  }

  componentDidMount() {
    this.getData()
  }

  onClickLikeButton = () => {
    const {isLiked} = this.state

    if (isLiked) {
      this.setState({isLiked: false})
    } else {
      this.setState({isLiked: true, isDisLiked: false})
    }
  }

  onClickDisLikeButton = () => {
    const {isDisLiked} = this.state

    if (isDisLiked) {
      this.setState({isDisLiked: false})
    } else {
      this.setState({isDisLiked: true, isLiked: false})
    }
  }

  onClickSaveButton = (saveVideo, deleteVideo, savedVideos) => {
    const {videoData, isSaved} = this.state
    if (isSaved) {
      deleteVideo(videoData.id)
      this.setState({isSaved: false})
    } else {
      saveVideo(videoData)
      this.setState({isSaved: true})
    }
  }

  getData = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})

    const jwtToken = Cookies.get('jwt_token')
    const {match} = this.props
    const {params} = match
    const {id} = params

    const apiUrl = `https://apis.ccbp.in/videos/${id}`

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
        subscriberCount: data.channel.subscriber_count,
      },
      id: data.id,
      description: data.description,
      publishedAt: data.published_at,
      title: data.title,
      videoUrl: data.video_url,
      viewCount: data.view_count,
      thumbnailUrl: data.thumbnail_url,
    })
    if (response.ok === true) {
      const videoData = await response.json()

      const formattedData = formatData(videoData.video_details)

      this.setState({
        apiStatus: apiStatusConstants.success,
        videoData: formattedData,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  renderLoader = () => <LoadingView />

  renderFailureView = () => <FailureView getData={this.getData} />

  renderVideoPlayer = (isDark, saveVideo, savedVideos) => {
    const {videoData, isSaved, isLiked, isDisLiked} = this.state
    const {
      videoUrl,
      channel,
      title,
      publishedAt,
      viewCount,
      description,
      thumbnailUrl,
    } = videoData

    return (
      <div>
        <ReactPlayerContainer>
          <ReactPlayer url={videoUrl} controls width="100%" height="400px" />{' '}
        </ReactPlayerContainer>
        <ResponsiveBottomContainer>
          <VideoTitle isDark={isDark}>{title}</VideoTitle>
          <Div isDark={isDark}>
            <P isDark={isDark}>{viewCount} views</P>
            <Dot />
            <P isDark={isDark}>{formatDistanceToNow(new Date(publishedAt))}</P>
            <ActionButtonsContainer>
              <ActionButtons
                isDark={isDark}
                isLiked={isLiked}
                onClick={this.onClickLikeButton}
              >
                <AiOutlineLike />
                Like
              </ActionButtons>
              <ActionButtons
                isDark={isDark}
                isLiked={isDisLiked}
                onClick={() => this.onClickDisLikeButton(saveVideo)}
              >
                <AiOutlineDislike />
                Dislike
              </ActionButtons>
              <ActionButtons
                onClick={() => this.onClickSaveButton(saveVideo, savedVideos)}
                isDark={isDark}
                isLiked={isSaved}
              >
                <RiMenuAddLine />
                {isSaved ? 'Saved' : 'Save'}
              </ActionButtons>
            </ActionButtonsContainer>
          </Div>
          <hr />
          <ChannelDetailsContainer>
            <ChannelProfileImage
              src={channel.profileImageUrl}
              alt="channel logo"
            />
            <div>
              <ChannelDetails isDark={isDark}>
                {channel.channelName}
              </ChannelDetails>
              <ChannelDetails isDark={isDark}>
                {channel.subscriberCount} subscribers
              </ChannelDetails>
              <ChannelDescription isDark={isDark}>
                {description}
              </ChannelDescription>
            </div>
          </ChannelDetailsContainer>
        </ResponsiveBottomContainer>
      </div>
    )
  }

  renderPlayer = (isDark, saveVideo, deleteVideo, savedVideos) => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderVideoPlayer(
          isDark,
          saveVideo,
          deleteVideo,
          savedVideos,
        )
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
          const {isDark, saveVideo, deleteVideo, savedVideos} = value

          return (
            <PlayerComponentContainer
              isDark={isDark}
              data-testid="videoItemDetails"
            >
              <Header />
              <MainContainer isDark={isDark}>
                <SideBar />
                <div>
                  {this.renderPlayer(
                    isDark,
                    saveVideo,
                    deleteVideo,
                    savedVideos,
                  )}
                </div>
              </MainContainer>
            </PlayerComponentContainer>
          )
        }}
      </AppContext.Consumer>
    )
  }
}

export default VideoItemDetails
