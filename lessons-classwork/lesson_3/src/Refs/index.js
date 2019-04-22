import React, { Component } from 'react';

class DemoRef extends Component{

  inputRef = React.createRef();

  handler = (e) => {
    console.log(e.target);
  }

  componentDidMount = () => {
    console.log( 'this._myRef', this._myRef );
    // console.log( 'this.inputRef.current', this.inputRef.current );
    //
    this._myRef.style.background = "red";
    this._myRef.value = "123"

  }

  myRefMethod = (node) => {
    // console.log('myRefMethod', node);
    // node.style.background = "red";
  }

  render = () => {
    let { handler } = this;
    return(
      <div>
        {
          // ref={ node => this._myRef = node  }
          //ref={this.inputRef}
          //ref={ node => this.myRefMethod( node ) }
          //ref{ node => this._myRef = node  }
          <input
            ref={ node => this._myRef = node}
            onChange={handler}
            placeholder="Text"
            />
        }
      </div>
    );
  }
}

export default DemoRef;
