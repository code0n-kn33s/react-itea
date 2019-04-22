import React, { Component } from 'react';

class BindDemo extends Component{
  constructor(props){
    super(props);
    this.state = {
      error: false
    }
    this.stateStuff = this.stateStuff.bind(this);
  }

  stateStuff(){
    console.log('this is error setted in "stateStuff"', this.state.error);
    this.setState({ error: !this.state.error});
  }

  arrowFunc = ( event ) => {
    console.log('this is error setted in "arrowFunc"', this.state.error);
    this.setState({ error: !this.state.error});
  };

  render = () => {
    let { title } = this.props;
    return(
      <div>
        <h2>{title}</h2>
        {/* Антипаттерн - не делайте так. При попытке передать функцию, потеряет контекст*/}
        <button className="functionButton" onClick={this.stateStuff.bind(this)}>Bind in component (anti-pattern)</button>
        {/* Используя стрелочные функции прямо внутри метода рендер */}
        <button className="functionButton" onClick={(e) => this.stateStuff(e) }>Using arrow-functions</button>
        {/* Биндя функцию в конструкторе, немного не аккуратный но стабильный метод */}
        <button className="functionButton" onClick={this.stateStuff}>Bind in constructor</button>
        {/* Используя стрелочные функции как независимый метод вашего компонента */}
        <button className="functionButton" onClick={this.arrowFunc}>Arrow-function as method</button>
      </div>
    );
  }

}

export default BindDemo;
