import Loader from 'react-loader-spinner'
import AppContext from '../../Context/AppContext'

import {LoaderContainer} from './StyledLoader'

const LoadingView = () => (
  <AppContext.Consumer>
    {value => {
      const {isDark} = value
      return (
        <LoaderContainer isDark={isDark} data-testid="loader">
          <Loader
            type="ThreeDots"
            height="80"
            width="80"
            radius={9}
            color={isDark ? '#4fa94d' : '#3b82f6'}
          />
        </LoaderContainer>
      )
    }}
  </AppContext.Consumer>
)

export default LoadingView
