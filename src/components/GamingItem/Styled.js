import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const LiEl = styled.li`
  list-style: none;
  display: flex;
  flex-direction: column;
`

export const GamingThumbnail = styled.img`
  height: 200px;
  margin: 7px;
  display: flex;
  flex-grow: 1;
  border-radius: 10px;
`

export const LinkEl = styled(Link)`
  text-decoration: none;
  width: 30%;
  max-width: 270px;

  @media screen and (max-width: 575px) {
    width: 45%;
  }
`
export const VideoTitle = styled.p`
  font-size: small;
  font-weight: 700;
  margin-left: 8px;
  margin-top: 0px;
  margin-bottom: 3px;
  color: ${props => (props.isDark ? '#e2e8f0' : '#231f20')};
`

export const ViewCount = styled.p`
  font-size: small;
  font-weight: 600;
  margin-left: 8px;
  margin-top: 0px;
  color: ${props => (props.isDark ? '#cbd5e1' : '#475569')};
`
