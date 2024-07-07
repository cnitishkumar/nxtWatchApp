import {Component} from 'react'
import './App.css'
import {Switch, Route, Redirect} from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './components/Home'
import Trending from './components/Trending'
import SavedVideos from './components/SavedVideos'
import VideoPlayer from './components/VideoPlayer'
import Gaming from './components/Gaming'
import Login from './components/Login'
import NotFound from './components/NotFound'
import AppContext from './Context/AppContext'

// Replace your code here
class App extends Component {
  state = {isDark: false, activeTab: 'HOME', savedVideos: []}

  changeTheme = () => {
    this.setState(prevState => ({isDark: !prevState.isDark}))
  }

  changeTab = optionId => {
    this.setState({activeTab: optionId})
  }

  saveVideo = newVideo => {
    this.setState(prevState => ({
      savedVideos: [...prevState.savedVideos, newVideo],
    }))
  }

  deleteVideo = id => {
    const {savedVideos} = this.state

    const filteredList = savedVideos.filter(each => each.id !== id)

    this.setState({savedVideos: filteredList})
  }

  render() {
    const {isDark, activeTab, savedVideos} = this.state

    console.log(savedVideos)

    return (
      <AppContext.Provider
        value={{
          changeTheme: this.changeTheme,
          isDark,
          changeTab: this.changeTab,
          saveVideo: this.saveVideo,
          deleteVideo: this.deleteVideo,
          activeTab,
          savedVideos,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <ProtectedRoute exact path="/videos/:id" component={VideoPlayer} />
          <ProtectedRoute exact path="/bad-path" component={NotFound} />
          <Redirect to="/bad-path" component={NotFound} />
        </Switch>
      </AppContext.Provider>
    )
  }
}

export default App
