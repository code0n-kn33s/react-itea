import React, { Component } from 'react';

class StatefullComponent extends Component{
  constructor(props){
    super(props);

    this.state = {
      react: 'React',
      dataArray: [
        'is cool',
        'is fast',
        'is flexible',
        'is smart'
      ],
      index: 0
    }

    this.method = this.method.bind(this);
  }
  method(){
    let { react, dataArray, index } = this.state;

     index === dataArray.length - 1 ?
      index = 0 :
      index++;

    this.setState({index})

  }
  render(){
    let { method } = this;
    let { react, dataArray, index } = this.state;
    return(
      <h1 className="fullwidth" onClick={method}>{`${react} ${dataArray[index]}`}</h1>
    )
  }

}


export default StatefullComponent;
