import React, { Component } from 'react';
import './App.css';
import logo from './white_itea.png';
import Navigation from './navigation';

import ComponentsType from './ComponentsType';
import ChildElements from './ChildElements';
import BindDemo from './Binding';
import Lifecycle from './Lifecycle';

class App extends Component {
  state = {
    activeTabId: 1,
    buttons: [
      {
        id: 0,
        title: 'Lets talk about stateful and stateless components',
        component: ComponentsType
      },
      {
        id: 1,
        title: 'Components childrens',
        component: ChildElements
      },
      {
        id: 2,
        title: 'How to bind functions to component state',
        component: BindDemo
      },
      {
        id: 3,
        title: 'Component Lifecycle',
        component: Lifecycle
      },
      {
        id: 4,
        title: 'test',
        component: () => (<h1>Hello World</h1>)
      }
    ]
  }

  handleButtonChange = (e) => {
    this.setState({
      activeTabId: Number( e.target.dataset.id )
    })
  }

  render() {
    const { handleButtonChange } = this;
    let { activeTabId, buttons } = this.state;
    return (
      <div className="wrap">
        <header className="header">
          <div className="header__logo">
            <img src={logo} alt="itea logo" className="itea-logo"/>
          </div>
          <Navigation activeTab={activeTabId} buttons={buttons} changer={handleButtonChange}/>
        </header>
        <section className="content">
        {
          buttons.map( (tab, key) => {
            if( tab.id === activeTabId){
              let Component = tab.component;
              return(
                <Component key={key} test="test"/>
              );
            } else {
              return null;
            }

          })
        }
        </section>
       

      </div>
    );
  }
}

export default App;

{/* <LoaderImg src="https://ucf.in.ua/storage/posts/18102018/298.jpg" /> */}
