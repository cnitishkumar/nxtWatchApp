import styled from 'styled-components'
import {BsDot} from 'react-icons/bs'

export const PlayerComponentContainer = styled.div`
  height: 100vh;
`

export const MainContainer = styled.div`
  display: flex;
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#ebebeb')};
`
export const ReactPlayerContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 75vw;
  padding: 10px;
  @media screen and (max-width: 768px) {
    width: 100vw;
  }
  @media screen and (min-width: 992px) {
    width: 85vw;
  }
`

export const VideoTitle = styled.p`
  font-size: large;
  margin-top: 0px;
  font-weight: 600;
  color: ${props => (props.isDark ? '#e2e8f0' : '#231f20')};
`
export const ResponsiveBottomContainer = styled.div`
  margin-left: 10px;
`
export const Div = styled.div`
  display: flex;
  align-items: center;
`
export const P = styled.p`
  font-size: small;
  font-weight: 400;
  color: ${props => (props.isDark ? '#cbd5e1' : '#231f20')};
  letter-spacing: 0.3;
  margin-top: 0px;
`
export const Dot = styled(BsDot)`
  font-size: small;
  margin-bottom: 12px;
`

export const ActionButtons = styled.button`
  border: none;
  background-color: transparent;
  color: ${props => (props.isDark ? '#cbd5e1' : '#606060')};
  color: ${props => (props.isLiked ? '#00306e' : '')};
  margin-left: 10px;
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: medium;
`

export const ActionButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-left: auto;
  margin-right: 20px;
`
export const ChannelDetailsContainer = styled.div`
  display: flex;
`
export const ChannelProfileImage = styled.img`
  height: 45px;
  width: 45px;
  margin-right: 10px;
  border-radius: 100%;
`
export const ChannelDetails = styled.p`
  font-size: small;
  font-weight: 400;
  margin-top: 0px;
  color: ${props => (props.isDark ? '#cbd5e1' : '#231f20')};
`
export const ChannelDescription = styled.p`
  font-size: small;
  font-weight: 400;
  margin-top: 15px;
  color: ${props => (props.isDark ? '#cbd5e1' : '#231f20')};
`
