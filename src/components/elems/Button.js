import React from 'react';
import { FaHandPointUp } from 'react-icons/fa'
import styled from 'styled-components'

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 3px;
  font-size: 20px;
  color: white;
  background-color: lightseagreen;
`

const Button = ({className, action, children}) => (
  <StyledButton className={className} onClick={action}>
    {
      children === undefined ?
        <FaHandPointUp/> :
        children
    }
  </StyledButton>
);

Button.defaultProps = {
  action: (e) => {
    console.log('action on Button e', e  );
  }
}

export default Button;
