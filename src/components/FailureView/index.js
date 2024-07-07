import AppContext from '../../Context/AppContext'

import {
  ErrorPageContainer,
  ErrorImg,
  ErrorHeading,
  ErrorText,
  RetryBtn,
} from './StyledFailure'

const FailureView = props => (
  <AppContext.Consumer>
    {value => {
      const {isDark} = value

      const onClickRetryBtn = () => {
        const {getData} = props
        getData()
      }

      const imageUrl = isDark
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
      return (
        <ErrorPageContainer dark={isDark}>
          <ErrorImg src={imageUrl} alt="failure view" />
          <ErrorHeading dark={isDark}>Oops! Something Went Wrong</ErrorHeading>
          <ErrorText dark={isDark}>
            We are having some trouble to complete your request. <br />
            Please try again.
          </ErrorText>
          <RetryBtn type="button" onClick={onClickRetryBtn}>
            Retry
          </RetryBtn>
        </ErrorPageContainer>
      )
    }}
  </AppContext.Consumer>
)

export default FailureView
