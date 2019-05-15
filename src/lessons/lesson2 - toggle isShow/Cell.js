import React from 'react';

import styled, { css } from 'styled-components'
import { colors } from '../../components/elems/ComputedStyles'

const StyledCell = styled.div`
  padding: 15px;
  background: ${ props => props.bgColor };
  color: ${ props => props.fontColor };
  flex-grow: 1;
  width: 40px;
  align-self: center;
  border-right: 1px solid palevioletred;
  :last-child {
    border: none;
  }
  ${props => props.primary && css`
    background: palevioletred;
    color: white;
  `}
  :hover {
    font-weight: bold;
  }
  font-style: ${ props => props.type === 'DATE' ? 'italic' : 'normal' };
  text-align: ${ props => props.type === 'NUMBER' ? 'right' : 'left' };
  /* text-align: ${ props => props.type === 'NUMBER' && props.type === 'MONEY' ? 'right' : 'left' }; */
`

export const Cell = ({ text, cells, fontColor, bgColor, type, currency }) => {
  if (type === 'MONEY' && !currency) {
    console.log('Задайте валюту currency')
  }
  return (
    <StyledCell bgColor={ bgColor } fontColor={ fontColor } type={ type }>
      {
        text
      }
      {
        currency ? currency : ''
      }
    </StyledCell>
) }

Cell.defaultProps = {
  cells: 1,
  fontColor: colors.text,
  bgColor: 'white',
  type: 'TEXT',
  text: '',
  currency: null
}