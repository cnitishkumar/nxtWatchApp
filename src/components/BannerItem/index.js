import {Component} from 'react'
import {IoMdClose} from 'react-icons/io'
import './index.css'

class BannerItem extends Component {
  state = {showBanner: true}

  onClickCloseBtn = () => {
    this.setState({showBanner: false})
  }

  render() {
    const {showBanner} = this.state
    return (
      showBanner && (
        <div className="banner-container">
          <div className="banner-header-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
              alt="nxt watch logo"
              className="banner-image"
            />
            <button
              type="button"
              onClick={this.onClickCloseBtn}
              data-testid="close"
              className="close-btn"
            >
              <IoMdClose alt="cross-icon" />
            </button>
          </div>
          <p className="premium-description">
            Buy Nxt Watch Premium prepaid plans with UPI
          </p>
          <button type="button" className="get-premium-btn">
            GET IT NOW
          </button>
        </div>
      )
    )
  }
}

export default BannerItem
