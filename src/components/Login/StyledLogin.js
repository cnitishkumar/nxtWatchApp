import styled from 'styled-components'

export const LoginComponentContainer = styled.div`
  height: 100vh;
  font-family: 'Roboto';
  background-color: ${props => (props.isDark ? ' #181818' : '#ffffff')};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const LoginContainer = styled.div`
  min-width: 360px;
  border-radius: 20px;
  padding: 20px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  background-color: ${props => (props.isDark ? ' #0f0f0f' : '#ffffff')};
`

export const LabelEl = styled.label`
  font-size: small;
  font-weight: 500;
  color: ${props => (props.isDark ? '#ffffff' : '#616e7c')};
  margin-top: 7px;
`
export const LabelElCheckbox = styled.label`
  font-size: small;
  font-weight: 500;
  color: ${props => (props.isDark ? '#ffffff' : '#0f0f0f')};
`

export const InputEl = styled.input`
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 500;
  height: 34px;
  color: #7e858e;
  padding: 8px;
  border: 1px solid #616e7c;
  margin-top: 4px;
  outline: none;
  border-radius: 5px;
  background-color: ${props => (props.isDark ? ' #0f0f0f' : '#ffffff')};
`

export const LoginButton = styled.button`
  background-color: #3b82f6;
  border-width: 0px;
  border-radius: 5px;
  font-size: medium;
  padding: 5px;
  color: #ffffff;
  font-weight: 600;
  margin: 5px;
`
