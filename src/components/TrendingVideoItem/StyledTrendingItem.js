import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {BsDot} from 'react-icons/bs'

export const LinkItem = styled(Link)`
  text-decoration: none;
  font-family: 'Roboto';
  margin-top: 13px;
  width: 100%;
`

export const ChannelName = styled.p`
  margin-bottom: 0px;
  color: ${props => (props.isDark ? '#cbd5e1' : '#475569')};
  @media screen and (max-width: 567px) {
    margin-top: 0px;
  }
`
// Styling containers
export const ItemContainer = styled.div`

  display: flex;
  flex-direction: column;
   @media screen and (max-width: 567px) {
    flex-direction: row:
  }
`
export const ChannelDetails = styled.div`
  display :flex;
  align-items :center;
  }
`
export const ChannelViewsData = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0px;
`
export const ViewsData = styled.div`
  display: flex;
  align-items: center;
`

// styling List items..
export const LiEl = styled.li`
  display: flex;
  @media screen and (max-width: 567px) {
    margin-left: 5px;
    margin-right: 5px;
    flex-direction: column;
  }
`

// Styling images.
export const Thumbnail = styled.img`
  width: 45%;
  border-radius: 10px;
  margin-right: 10px;
  max-width: 600px;
  @media screen and (max-width: 567px) {
    width: 100%;
    margin-right: 0px;
  }
`
export const ChannelProfileImg = styled.img`
  display: none;
  height: 40px;
  width: 40px;
  border-radius: 100%;
  @media screen and (max-width: 576px) {
    display: block;
  }
`

// Styling text Content..
export const VideoTitle = styled.p`
  font-size: medium;
  margin-left: 10px;
  font-weight: 600;
  color: ${props => (props.isDark ? '#e2e8f0' : '#231f20')};
`
export const ViewsText = styled.p`
  font-weight: 500;
  font-size: small;
  color: ${props => (props.isDark ? '#cbd5e1' : '#475569')};
`
export const StyledDot = styled(BsDot)`
  color: ${props => (props.isDark ? '#cbd5e1' : '#475569')};
  font-size: small;
`
export const ChannelNameViewsDataContainer = styled.div`
@media screen and (max-width : 567px){
    margin-left :45px;
    display :flex;
    align-items :center;`
