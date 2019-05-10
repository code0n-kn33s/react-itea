import React from 'react';

export const Row = ({action, style, textValue, children}) => (
  <div style={style} onClick={action}>
    {
      children === undefined ?
        textValue :
        children
    }
  </div>
);

Row.defaultProps = {
  style: {
    padding: '5px 20px'
  },
  action: () => {
    console.log('Default action on Row');
  },
  textValue: "Just a Row"
}

export default Row;
