import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const LiEl = styled.li`
  list-style: none;
  display: flex;
  flex-direction: column;
`

/*  ...Styling Link Item...  */
export const LinkItem = styled(Link)`
  text-decoration: none;
   width: 20%;
   min-width :200px;
   max-width :500px;
  flex-grow: 1;
  margin: 10px;
  @media screen and (max-width : 575px){
      width :100%;
  }
 @media screen and (min-width : 576px) and (max-width : 768px){
      width :40%;
  }
 
  }
`

/*  ...Styling Images...  */
export const Thumbnail = styled.img`
  width: 100%;
  border-radius: 10px;
`
export const ChannelLogo = styled.img`
  width: 28px;
  height: 28px;
  align-self: flex-start;
  margin: 7px 5px auto 2px;
`
/*  ...Styling Text content...  */
export const VideoTitle = styled.p`
  font-family: 'Roboto';
  font-size: small;
  font-weight: 600;
  color: ${props => (props.dark ? '#ffffff' : '#231f20')};
  line-height: 1.5;
  margin-bottom: 0;
  margin-top: 5px;
`
export const ChannelDetails = styled.p`
  font-size: smaller;
  font-weight: 600;
  margin-top: 0px;, 
  display:flex;
  align-items: center;
  margin :0px;
 color:${props => (props.dark ? '#94a3b8' : '#616e7c')}; 
`

/*  ...Styling Containers...  */
export const BottomCard = styled.div`
  display: flex;
`
export const ProfileImgCard = styled.div``
export const ChannelCard = styled.div`
  display: flex;
  margin: 0;
  @media screen and (min-width: 576px) {
    flex-direction: column;
  }
`
export const VideoItemCard = styled.div`
  display: flex;
  margin: 0;
  flex-direction: column;
  margin-bottom: 5px;
`
