import React, { Component } from 'react';
import Buttonz from './Button';
import ChildDemo from './Children';

const style = {
  color: 'palevioletred',
  backgroundColor: 'papayawhip',
  padding: '5px 20px'
}


const ButtonString = () => (
  <div> Text </div>
);


class ChildElements extends Component {
  state = {
    updatedProps: null
  }
  updateProps = (event) => {
    console.log('Update props of Lifecycle method');
    this.setState({updatedProps: 123});
  };

  render = () => {
    return(
      <div>
      {
        // <ChildDemo>
        //   <Buttonz
        //     action={this.updateProps}
        //     style={style}
        //   />
        //   <Buttonz
        //     action={this.updateProps}
        //     style={style}
        //     textValue="Button name"
        //     />
        // </ChildDemo>
      }
        <Buttonz
         style={style}
         textValue="I'm a button!"
         action={this.updateProps}
         >
          <ButtonString/>
         </Buttonz>
      </div>
    );
  }
}




export default ChildElements;
