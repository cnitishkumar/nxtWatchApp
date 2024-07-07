import styled from 'styled-components'

export const GamingComponentContainer = styled.div`
  height: 100vh;
  background-color: ${props => (props.isDark ? '#0f0f0f' : ' #f9f9f9')};
`

export const MainContainer = styled.div`
  display: flex;
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#f9f9f9')};
`
export const GamingHeader = styled.div`
  display: flex;
  padding: 5px;
  margin-bottom: 10px;
  border-radius: 10px;
  align-items: center;
  background-color: ${props => (props.isDark ? '#424242' : '#f1f5f9')};
  height: 10vh;
`
export const GamingHeading = styled.h1`
  font-size: xx-large;
  font-family: 'Roboto';
  color: ${props => (props.isDark ? '#ffffff' : '#231f20')};
  margin-left: 10px;
`
export const GamingIconContainer = styled.div`
  padding: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  background-color: ${props => (props.isDark ? '#0f0f0f' : ' #94a3b8')};
`

export const UlEl = styled.ul`
  margin: 0px;
  padding: 0px;
  height: 90vh;
  display: flex;
  flex-wrap: wrap;
  overflow-y: scroll;

  @media screen and (max-width: 768px) {
    justify-content: space-around;
  }
`
