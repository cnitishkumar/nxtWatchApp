/* eslint-disable import/prefer-default-export */
import styled from 'styled-components'

export const ErrorPageContainer = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0;
  background-color: ${props => (props.dark ? '#181818' : '#f9f9f9')};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Roboto';
  text-align: center;
`

export const ResponsiveSection = styled.div`
  display: flex;
`

export const ErrorImg = styled.img`
  width: 170px;
  margin-bottom: 11px;
  @media screen and (min-width: 768px) {
    width: 315px;
  }
`

export const ErrorHeading = styled.h2`
  color: ${props => (props.dark ? '#f1f5f9' : '#1e293b')};
  font-weight: 600;
  font-size: medium;
  margin-top: 9px;
  margin-bottom: 3px;
`

export const ErrorText = styled.p`
  color: #94a3b8;
  font-weight: 500;
  font-size: small;
  margin-top: 9px;
  margin-bottom: 3px;
`

export const RetryBtn = styled.button`
  border: solid 1.2px #4f46e5;
  border-radius: 4px;
  background-color: #4f46e5;
  color: #ffffff;
  padding: 7px 17px;
  font-weight: 600;
  font-size: 13px;
  margin-top: 11px;
  cursor: pointer;
`
