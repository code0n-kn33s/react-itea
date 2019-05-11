import React from 'react';
import Button from './../../components/elems/Button'
import { FaRegHandScissors } from 'react-icons/fa'
import styled from 'styled-components'

const pink = 'palevioletred'

const FaRegHandScissorsStyled = styled(FaRegHandScissors)`
  font-size: 20px;
`
const StyledButton = styled(Button)`
  border-radius: 50px;
  padding: 10px;
  width: 40px;
  height: 40px;
  display: ${ props => props.head ? 'hidden' : 'block'};
  background-color: lightskyblue;
  font-weight: bold;
  color: white;
  text-align: center;
`

const RowStyled = styled.div`
  display: flex;
  border-bottom: 1px solid ${pink};
  :last-child {
    border-bottom: none;
  };
  font-weight: ${props => props.head ? '700' : '400' };
  text-transform: ${props => props.head ? 'uppercase' : '' };
`

export const Row = ({ head, children }) => {
  const headProp = head
  return (
    <RowStyled head={ headProp }>
      {
        children === undefined ? '' : children
      }
      <StyledButton head={headProp} className="diff-button">
        <FaRegHandScissorsStyled />
      </StyledButton>
      <StyledButton head={ headProp } className="diff-button" text='add' />
    </RowStyled>
  )
}

Row.defaultProps = {
  head: false
}

export default Row;