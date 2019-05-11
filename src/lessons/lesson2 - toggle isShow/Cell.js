import React from 'react';

import styled, { css } from 'styled-components'

const StyledCell = styled.div`
  padding: 5px;
  background: ${ props => props.bgColor || 'white' };
  flex-grow: 1;
  text-align: center;
  align-self: center;
  border-right: 1px solid palevioletred;
  :last-child {
    border: none;
  }
  ${props => props.primary && css`
    background: palevioletred;
    color: white;
  `}
`

export const Cell = ({
  text,
  cells,
  fontColor,
  bgColor,
  type }) => {
  return (
    <StyledCell>{ text }</StyledCell>
) }

Cell.defaultProps = {
  cells: 1,
  fontColor: 'grey',
  bcgColor: 'lightblue',
  type: 'TEXT',
  text: ''
}