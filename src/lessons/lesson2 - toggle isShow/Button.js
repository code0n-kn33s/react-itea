import React from 'react';

const Button = ({action, style, textValue, children}) => (
  <button style={style} onClick={action}>
    {
      children === undefined ?
        textValue :
        children
    }
  </button>
);

Button.defaultProps = {
  style: {
    margin: '15px 10px',
    padding: '5px 20px',
    background: 'yellow'
  },
  action: (e) => {
    console.log('action on Button e', e  );
  },
  textValue: "Old text button"
}

export default Button;
