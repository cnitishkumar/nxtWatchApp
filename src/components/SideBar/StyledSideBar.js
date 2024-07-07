import styled from 'styled-components'

export const SideBarContainer = styled.div`
  background-color: ${props => (props.isDark ? '#212121' : '#f9f9f9')};
  height: 90vh;
  width: 15vw;
  min-width: 200px;
  max-width: 350px;
  margin-top: 0px;
  margin-right: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (max-width: 767px) {
    display: none;
  }
`

export const SideBarBtn = styled.button`
  color: ${props => (props.isDark ? '#ffffff' : '#0f0f0f')};
  background-color: ${props => (props.isActive ? ' #424242' : 'transparent')};
  display: flex;
  align-items: center;
  padding-left: 20px;
  font-size: medium;
  border-width: 0px;
  width: 100%;
  height: 30px;
  font-weight: bold;
`
export const StyledIcon = styled.svg`
  color: ${props => (props.isActive ? 'red' : '#ffffff')};
`

/*  Styling Contact us Section  */
export const ContactUsSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 15px;
  //   align-items: center;
`
export const SocialIconsCard = styled(ContactUsSection)`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding-left: 0;
  //   border: solid 1px #d0d0d0;
`
export const SocialIcon = styled.img`
  width: 28px;
  height: 28px;
  margin-right: 7px;
`
export const TextContent = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 500;
  color: ${props => (props.isDark ? '#f0fcff' : '#1e293b')};
  line-height: 1.5;
`
export const Title = styled(TextContent)`
  font-size: 17px;
  font-weight: 600;
  color: ${props => (props.isDark ? '#feffff' : '#231f20')};
  letter-spacing: 0.7px;
`
