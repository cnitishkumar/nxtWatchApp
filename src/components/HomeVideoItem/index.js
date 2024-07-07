import {formatDistanceToNow} from 'date-fns'
import {BsDot} from 'react-icons/bs'
import AppContext from '../../Context/AppContext'

import {
  LiEl,
  Thumbnail,
  LinkItem,
  ChannelLogo,
  VideoTitle,
  BottomCard,
  ProfileImgCard,
  ChannelCard,
  VideoItemCard,
  ChannelDetails,
} from './StyledHomeItem'

const HomeVideoItem = data => {
  const {videoDetails} = data

  const {
    title,
    publishedAt,
    thumbnailUrl,
    channel,
    viewCount,
    id,
  } = videoDetails

  return (
    <AppContext.Consumer>
      {value => {
        const {isDark} = value

        return (
          <LinkItem to={`/videos/${id}`}>
            <LiEl>
              <Thumbnail src={thumbnailUrl} alt="video thumbnail" />
              <BottomCard>
                <ProfileImgCard>
                  <ChannelLogo
                    src={channel.profileImageUrl}
                    alt="channel logo"
                  />
                </ProfileImgCard>

                <VideoItemCard>
                  <VideoTitle dark={isDark}>{title}</VideoTitle>

                  <ChannelCard>
                    <ChannelDetails dark={isDark}>
                      {channel.channelName}
                    </ChannelDetails>
                    <ChannelDetails dark={isDark}>
                      {`${viewCount}views`} <BsDot /> {publishedAt}
                    </ChannelDetails>
                  </ChannelCard>
                </VideoItemCard>
              </BottomCard>
            </LiEl>
          </LinkItem>
        )
      }}
    </AppContext.Consumer>
  )
}

export default HomeVideoItem
