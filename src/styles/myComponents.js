import styled from 'styled-components'

export const Title = styled.div`
  min-height: 70px;

`
export const L_Title = styled.h1`
  font-size: 64px;
  margin: 8px;
  margin-bottom: 96px;
`

export const Button = styled.button`
  width: 530px; height: 60px;
  font-size: 20px; border-radius: 20px;
  border: none; color: white;
  background-color: #6D6CFF; margin: 20px;
  &:active{ background-color: #3736FF }

`
export const P_bar = styled.div`
  @media screen and (max-width:480px) {
    width: 10%;
  }  
`