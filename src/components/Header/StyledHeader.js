import styled from 'styled-components'

export const NavBar = styled.nav`
  background-color: ${props => (props.dark ? '#212121' : '#f9f9f9')};
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 10vh;
  width: 100vw;
`

export const LogoutBtn = styled.button`
  border: ${props => (props.dark ? '2px solid #ffffff' : '2px solid #3b82f6')};
  color: ${props => (props.dark ? '#ffffff' : '#3b82f6')};
  font-weight: bold;
  font-size: medium;
  cursor: pointer;
  border-radius: 5px;
  background-color: transparent;
  margin-right: 15px;
`

export const NavThemeButton = styled.button`
  background-color: transparent;
  color: ${props => (props.dark ? '#ffffff' : '#0f0f0f')};
  border-width: 0px;
  cursor: pointer;
  padding: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const PopupContainer = styled.div`
  background-color: ${props => (props.isDark ? '#212121' : '#f9f9f9')};
  height: 200px;
  width: 80vw;
  border-radius: 20px;
  max-width: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const LogoutMessage = styled.p`
  font-size: medium;
  text-align: center;
  font-weight: 600;
  color: ${props => (props.dark ? '#ffffff' : '#0f0f0f')};
`
