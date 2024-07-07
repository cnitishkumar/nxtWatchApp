import styled from 'styled-components'

// CSS copied from Trending page

export const TrendingComponentContainer = styled.div`
  height: 100vh;
  background-color: ${props => (props.isDark ? '#0f0f0f' : ' #f9f9f9')};
`
// #ebebeb
export const MainContainer = styled.div`
  display: flex;
  background-color: ${props => (props.isDark ? ' #181818' : ' #f1f1f1')};
`
export const TrendingHeader = styled.div`
  display: flex;
  padding: 5px;
  margin-bottom: 10px;
  border-radius: 10px;
  align-items: center;
  background-color: ${props => (props.isDark ? '#424242' : '#f1f5f9')};
  height: 10vh;
`
export const TrendingHeading = styled.h1`
  font-size: xx-large;
  font-family: 'Roboto';
  color: ${props => (props.isDark ? '#ffffff' : '#231f20')};
  margin-left: 10px;
`
export const TrendingIconContainer = styled.div`
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
  background-color: ${props => (props.isDark ? '#181818' : '#ebebeb')};
`

export const ErrorCard = styled.div`
  height: 90vh;
  width: 80vw;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: center;
  background-color: transparent;
  margin-top: 11px;

  @media screen and (max-width: 576px) {
    width: 100vw;
  }
`
export const ErrorImg = styled.img`
  width: 210px;
  @media (min-width: 576px) {
    width: 300px;
  }
`

export const ErrorText = styled.p`
  font-family: 'Roboto';
  //   font-weight: 500;
  font-size: 9px;
  line-height: 1.5;
  color: ${props => (props.dark ? '#cbd5e1' : '#7e858e')};
  text-align: center;
  @media (min-width: 576px) {
    font-size: 11px;
  }
`
export const ErrorHeading = styled.h3`
  letter-spacing: 0.6px;
  font-family: 'Roboto';
  text-align: center;
  color: ${props => (props.dark ? '#feffff' : '#1e293b')};
  margin-bottom: 0;
  @media (min-width: 576px) {
    // font-size: 11px;
  }
`
