import React from 'react';

const Buttonr = ({action, style, textValue, children}) => (
  <button style={style} onClick={action}>
    {
      children === undefined ?
        textValue :
        children
    }
  </button>
);

Buttonr.defaultProps = {
  style: {
    padding: '5px 20px'
  },
  action: () => {
    console.log('Default action on Button');
  },
  textValue: "Just a button"
}

export default Buttonr;
