import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const Heading = styled.h1`
  color: ${props => props.color}
  font-size: 34px;
  font-weight: bold;
`
export const Desc = styled.p`
  color: #7b8794;
  font-size: 18px;
`
export const RegisterButton = styled.button`
  background-color: #2563eb;
  padding: 8px 24px 8px 24px;
  color: #fff;
  outline: none;
  border: none;
`
export const Image = styled.img`
  width: 60%;
  height: 300px;
`
