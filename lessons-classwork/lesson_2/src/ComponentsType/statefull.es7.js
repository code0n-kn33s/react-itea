import React, { Component } from 'react';

/*
  Используя данный синтаксис будьте осторожны, для его работы в вашем проекте должен
  быть подключен и настроен babel с плагином: https://babeljs.io/docs/plugins/transform-class-properties/
*/

class StatefullComponent extends Component{
  state = {
    react: 'React',
    dataArray: [
      'is cool',
      'is fast',
      'is flexible',
      'is smart'
    ],
    index: 0
  }
  static defaultProps = {
    defaultProp: 'React'
  }

  someValue = "someValue";
  
  method = (event) => {
    let { dataArray, index } = this.state;

     index === dataArray.length - 1 ?
      index = 0 :
      index++;

    this.setState({index})
  }
  render = () => {
    let { method } = this;
    let { react, dataArray, index } = this.state;
    return(
      <h1 className="fullwidth" onClick={method}>{`${react} ${dataArray[index]} ${this.someValue}`}</h1>
    )
  }
}


export default StatefullComponent;
