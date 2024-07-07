import {BsDot} from 'react-icons/bs'
import {formatDistanceToNow} from 'date-fns'
import AppContext from '../../Context/AppContext'
import {
  LinkItem,
  LiEl,
  Thumbnail,
  ItemContainer,
  VideoTitle,
  ChannelDetails,
  ChannelViewsData,
  ViewsData,
  ViewsText,
  ChannelProfileImg,
  StyledDot,
  ChannelName,
  ChannelNameViewsDataContainer,
} from './StyledTrendingItem'

const TrendingVideoItem = videoData => (
  <AppContext.Consumer>
    {value => {
      const {isDark} = value

      const {videoDetails} = videoData
      const {
        title,
        publishedAt,
        thumbnailUrl,
        channel,
        viewCount,
        id,
      } = videoDetails

      return (
        <LinkItem to={`/videos/${id}`}>
          <LiEl isDark={isDark}>
            <Thumbnail src={thumbnailUrl} alt="video thumbnail" />
            <ItemContainer>
              <ChannelDetails>
                <ChannelProfileImg
                  src={channel.profileImageUrl}
                  alt="channel logo"
                />
                <VideoTitle isDark={isDark}>{title}</VideoTitle>
              </ChannelDetails>
              <ChannelNameViewsDataContainer>
                <ChannelName isDark={isDark}>{channel.channelName}</ChannelName>

                <ChannelViewsData>
                  <ViewsData>
                    <StyledDot />
                    <ViewsText isDark={isDark}>{viewCount} views</ViewsText>

                    <StyledDot />
                    <ViewsText isDark={isDark}>
                      {formatDistanceToNow(new Date(publishedAt), {
                        addSuffix: false,
                      })}
                    </ViewsText>
                  </ViewsData>
                </ChannelViewsData>
              </ChannelNameViewsDataContainer>
            </ItemContainer>
          </LiEl>
        </LinkItem>
      )
    }}
  </AppContext.Consumer>
)

export default TrendingVideoItem
