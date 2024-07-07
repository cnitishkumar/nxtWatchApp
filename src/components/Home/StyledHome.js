import styled from 'styled-components'

export const HomeComponentContainer = styled.div`
  font-family: 'Roboto';
`

export const HomeContainer = styled.div`
  padding-top: 10px;
  background-color: ${props => (props.isDark ? '#181818' : '#f9f9f9')};
  display: flex;
  min-height: 90vh;
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

export const SearchBarContainer = styled.div`
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  border-width: 1px;
  background-color: ${props => (props.isDark ? '#383838' : '#ffffff')};
  max-width: 400px;
  justify-content: space-around;
`

export const SearchBtn = styled.button`
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: ${props => (props.isDark ? '#cdcdcd' : '#383838')};
  font-size: large;
  width: 15%;
  height: 100%;
  border-radius: 5px;

  background-color: ${props => (props.isDark ? '#313131' : '#f4f4f4')};
`
export const SearchInput = styled.input`
  font-size: medium;
  height: 35px;
  font-family: 'Roboto';
  color: ${props => (props.isDark ? '#cdcdcd' : '#1e2379')};
  border-width: 0px;
  background-color: transparent;
  width: 85%;

  outline: none;
`
export const NoSearchResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const NoSearchResultImage = styled.img`
  width: 90%;
  height: 40vh;
  max-width: 500px;
`
export const NoSearchResultHeading = styled.h1`
  font-size: larger;
  font-weight: bold;
  text-align: center;
  color: ${props => (props.isDark ? '#ffffff' : '#0f0f0f')};
`
export const NoSearchResultDescription = styled.p`
  font-size: medium;
  text-align: center;
  font-weight: 600;
  margin-top: 0px;
  color: ${props => (props.isDark ? '#94a3b8' : '#64748b')};
`
export const Div = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`
export const RetryButton = styled.button`
  background-color: #4f46e5;
  font-size: medium;
  border-radius: 10px;
  padding: 5px;
  color: #ffffff;
  margin-bottom: 10px;
`
