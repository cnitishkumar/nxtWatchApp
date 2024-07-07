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
  ErrorCard,
  ErrorImg,
  ErrorText,
  ErrorHeading,
} from './Styled'

const SavedVideos = () => {
  const renderVideos = (isDark, savedVideos) => {
    const savedVideosLength = savedVideos.length

    const renderErrorView = () => (
      <ErrorCard dark={isDark} isError>
        <ErrorImg
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
          alt="no saved videos"
        />

        <ErrorHeading dark={isDark}>No saved videos found</ErrorHeading>

        <ErrorText dark={isDark}>
          You can save your videos while watching them
        </ErrorText>
      </ErrorCard>
    )

    if (savedVideosLength > 0) {
      return (
        <UlEl isDark={isDark}>
          {savedVideos.map(each => (
            <TrendingVideoItem key={each.id} videoDetails={each} />
          ))}
        </UlEl>
      )
    }
    return renderErrorView()
  }

  return (
    <AppContext.Consumer>
      {value => {
        const {isDark, savedVideos} = value

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
                  <TrendingHeading isDark={isDark}>
                    Saved Videos
                  </TrendingHeading>
                </TrendingHeader>
                {renderVideos(isDark, savedVideos)}
              </div>
            </MainContainer>
          </TrendingComponentContainer>
        )
      }}
    </AppContext.Consumer>
  )
}

export default SavedVideos
