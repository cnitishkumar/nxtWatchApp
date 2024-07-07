import styled from 'styled-components'

export const LoaderContainer = styled.div`
  height: 100vh;
  width: 85vw;
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.isDark ? '#181818' : '#f9f9f9')};
`

export const Container = styled.div``
