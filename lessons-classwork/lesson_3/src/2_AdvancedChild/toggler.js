import React, { Component } from 'react';

/*
  React.cloneElement(
    element,
    [props],
    [...children]
  )
*/

export class Toggler extends Component {
  render(){
    let { name, children, activeToggler, changeStatus } = this.props;

    return(
      <div>
        {this.props.name}
        <div className="togglerContainer">
          {
            //https://reactjs.org/docs/react-api.html#reactchildren
            React.Children.map(
              children, // Передаем обьект с дочерними элементами
              (ChildrenItem) => { // Перебираем каждый элемент
                console.log('Toggler item:', ChildrenItem);
                if(ChildrenItem.props.name === activeToggler){
                    // https://reactjs.org/docs/react-api.html#cloneelement
                    return React.cloneElement(ChildrenItem, {
                      name: ChildrenItem.props.name,
                      active: true,
                      changeStatus: changeStatus
                    })
                } else {
                  return React.cloneElement(ChildrenItem, {
                    name: ChildrenItem.props.name,
                    changeStatus: changeStatus
                  })
                }
              }
            )
            }
        </div>
      </div>
    );
  }
}

export const TogglerItem = ({name, active, changeStatus}) => {
  return(
    <div className={
      active === true ?
        "togglerItem active":
        "togglerItem"
      }
      data-value={name}
      onClick={
        changeStatus !== undefined ?
          changeStatus :
          null
      }
      >
      {name}
    </div>
  );
};
