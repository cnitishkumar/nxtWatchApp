import AppContext from '../../Context/AppContext'

import {LiEl, GamingThumbnail, LinkEl, VideoTitle, ViewCount} from './Styled'

const GamingItem = props => {
  const {gamingDetails} = props
  const {thumbnailUrl, id, title, viewCount} = gamingDetails

  return (
    <AppContext.Consumer>
      {value => {
        const {isDark} = value

        return (
          <LinkEl to={`/videos/${id}`}>
            <LiEl>
              <GamingThumbnail src={thumbnailUrl} alt="video thumbnail" />
              <>
                <VideoTitle isDark={isDark}>{title}</VideoTitle>
                <ViewCount isDark={isDark}>
                  {viewCount} Watching Worldwide
                </ViewCount>
              </>
            </LiEl>
          </LinkEl>
        )
      }}
    </AppContext.Consumer>
  )
}

export default GamingItem
