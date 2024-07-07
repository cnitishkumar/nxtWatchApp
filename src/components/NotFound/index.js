import AppContext from '../../Context/AppContext'
import Header from '../Header'
import SideBar from '../SideBar'

import {
  NotFoundPage,
  ErrorCard,
  ErrorImg,
  ErrorText,
  ErrorHeading,
} from './Styled'

const NotFound = () => (
  <AppContext.Consumer>
    {value => {
      const {isDark} = value
      const image = isDark
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'

      return (
        <>
          <Header />
          <NotFoundPage isDark={isDark}>
            <SideBar />
            <ErrorCard>
              <ErrorImg src={image} alt="not found" />
              <ErrorHeading isDark={isDark}>Page Not Found</ErrorHeading>
              <ErrorText isDark={isDark}>
                We are sorry, the page you requested could not be found.
              </ErrorText>
            </ErrorCard>
          </NotFoundPage>
        </>
      )
    }}
  </AppContext.Consumer>
)

export default NotFound
