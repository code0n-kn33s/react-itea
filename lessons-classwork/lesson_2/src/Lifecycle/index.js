import React, { Component } from 'react';



/*

  Давайте разберем React Component Lifecycle
  https://reactjs.org/docs/react-component.html#lifecycle-methods
  http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
*/
class Lifecycle extends Component {
  /*
    Блок 1.
    Инициализация компонента.
  */
  constructor( props ){
    super(props); // Вызываем конструктор реакта передавая туда props
    /*
      В конструктор обьявляется state компонента.
      Так же, тут биндядся обработчики событий к классу
    */
    console.log('0.constructor');
    this.state = {  test: 'test', transformedArray: [] };

    // Бинд необходим для того что бы их функции можно было получить доступк к нативному методу реката
    // this.setState({});
    this.myMethod = this.myMethod.bind(this);
    this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
  }
  myMethod(){ this.setState({/* ... */});}
  forceUpdateHandler(){  this.forceUpdate(); }
  static getDerivedStateFromProps(props, state){
    /*
      Статичный метод для того что бы прокинуть значения с props
      в стейт компонента
    */
    console.log('1.getDerivedStateFromProps');
    console.log('props', props, 'state', state);

    if( props.test !== undefined ){
      return {
        newData: 'newData',
        test: props.test
      }
    } else {
      return null
    }
  }

  // Тут вызывается рендер

  componentDidMount(){
    // Выполняется после первой отрисовки.
    // Считается лучшим местом, для того что бы инициализировать загрузку
    // данных с сервера.
    // Вызов setState() в этом методе вызовет перерисовку.
    // API.Get(...)
    let requestUrl = "http://www.json-generator.com/api/json/get/ckPDzNHDAO?indent=2";
    fetch(requestUrl).then(
      res => res.json()
    ).then(
      data => {
        let transformedArray = data.map( user => {
          return({
            interviewed: false,
            user
          });
        });
        console.log( 'indexOf', transformedArray.indexOf({
          interviewed: false,
          user:{
            eyeColor:"blue",
            index: 2,
            name:"Kristine Stone"
          }
        }) );
        this.setState({transformedArray});
      }
    );
    console.log('3.componentDidMount');
  }

  /*
    Блок 2.
    Изменение данных компонента
  */

  shouldComponentUpdate(nextProps, nextState){
    /*
      Тут проверяется, является ли изменение состояние или пропсов причиной
      перерисовки всего компонента.
      Должен возвращать boolean -> true/false

      Если возвращает false, то методы componentWillUpdate(), render(), и componentDidUpdate()
      не сработают.
    */
    console.log('5.shouldComponentUpdate', nextProps, nextState, nextState.transformedArray.length);

    // if( nextState.transformedArray.length === 16 ){
    //   return false;
    // } else {
    //   return true;
    // }
    return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevState){
    /*
      Сделать слепок любых данны данных после отрисовки, для того,
      что бы передать их в метод componentDidUpdate.

      Должен вернуть значение, или null если ничего не поменялось.
    */
    if(true){
      return 27;
    } else {
      return null;
    }

  }
  // Тут снова Рендер.
  componentDidUpdate(prevProps, prevState, snapshot){

    /*
      Срабатывает сразу после рендера данных.
      Так же как и componentDidMount является отличным местом для side effects.

    */
    console.log('8.componentDidUpdate', prevProps, prevState, snapshot);
  }
  /*
    Блок 3.

  */
  componentWillUnmount(){
    /*
      Вызывается прямо перед тем, как компонент будет удален из DOM
    */
    console.log('7.componentWillUnmount');
  }

  render(){
    console.log('2.render', this.state.transformedArray);
    return(
      <div>
        <button className="functionButton" onClick={this.props.outsideDataUpdate}>Lifecycle</button>
        <button className="functionButton" onClick= {this.forceUpdateHandler} >FORCE UPDATE</button>
        <h4>Random Number : { Math.random() }</h4>
        {
          this.state.transformedArray.length !== 0 ?
            this.state.transformedArray.map( (person) => {
              return(<div key={person.user.index}>{person.user.name}</div>)
            }) : (<div>Loading</div>)
        }
      </div>
    );
  }

}


export default Lifecycle;
