import React from 'react'

const AppContext = React.createContext({
  changeTheme: () => {},
  isDark: {},
  changeTab: () => {},
  activeTab: {},
  saveVideo: () => {},
  savedVideos: [],
  deleteVideo: () => {},
})

export default AppContext
