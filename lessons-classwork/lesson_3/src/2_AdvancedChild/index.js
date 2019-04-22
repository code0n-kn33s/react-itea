import React, { Component } from 'react';
/*

  React.Children ->
    Методы для перебора дочерных элементов

    React.Children.map(children, function[(thisArg)]) -> Возвращает новый массив
    React.Children.forEach(children, function[(thisArg)]) -> Просто перебирает

    React.Children.count(children) -> Возвращает количество дочерних элементов
    React.Children.only(children) -> Проверят что у компонента есть только один дочерний элемент

    React.isValidElement(object) -> Проверяет, явкляет ли то что вы туда передали валидным реакт обьектом

    React.cloneElement(
      element,
      [props],
      [...children]
    )
*/

class DemoChild extends Component{
  render = () => {
    let { children } = this.props;
    console.log( 'Count of childrens:', React.Children.count(children) );
    // console.log( 'Only one child:', React.Children.only(children) );
    return(
      <div>
        {
          React.Children.map(
            children,
            ( childItem => {
              // console.log( 'child Element:', childItem );
              if( React.isValidElement(childItem) ){
                console.log('Valid Component', childItem);
              } else {
                console.warn('Invalid Component',childItem)
              }
            })
          )
        }
      </div>
    )
  }
}


export default DemoChild;
