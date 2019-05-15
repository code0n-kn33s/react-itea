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
  width: 20px;
  padding: 0;
  font-size: 20px;
  height: 20px;
  visibility: ${ props => props.head ? 'hidden' : 'visible'};
  background-color: transparent;
  font-weight: bold;
  border: none;
  color: white;
  text-align: center;
  :hover {
    cursor: pointer;
    transition: .3s ease;
    padding: 1px;
  }
`

const RowStyled = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${pink};
  :last-child {
    border-bottom: none;
  };
  font-weight: ${props => props.head ? '700' : '400' };
  text-transform: ${props => props.head ? 'uppercase' : '' };
`

export const Row = ({ head, del, children }) => {
  return (
    <RowStyled head={ head }>
      {
        children === undefined ? '' : children
      }
      <StyledButton
        className="diff-button"
        head={ head }
        onClick={ del }
      >
        <FaRegHandScissorsStyled />
      </StyledButton>
      <StyledButton head={ head } className="diff-button" text='add' />
    </RowStyled>
  )
}

Row.defaultProps = {
  head: false
}

export default Row;