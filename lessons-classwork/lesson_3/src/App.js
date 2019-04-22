import React, { Component } from 'react';
import './style/App.css';

import CompWithPropTypes from './1_PropTypes/';
import AdvancedChild from './2_AdvancedChild';
import {Toggler, TogglerItem} from './2_AdvancedChild/toggler';
import UnControlled from './3_ControlledForm/uncontrolledDemo';
import ControlledForm from './3_ControlledForm';
import Ref from './Refs';

const ComponentToSend = () => (<div>Null</div>);

class App extends Component {
  state = {
    textDemo: 'null',
    textDemo2: 'null2',
    activeToggler: "left"
  }
  changeHandler = (e) => {
     let value = e.target.value;
     console.log('value:', value)
     this.setState({
       textDemo: value
     })
   }

   changeStatus = (event) => {
     let TogglerValue = event.target.dataset.value;
     this.setState({
         activeToggler: TogglerValue
       });
   }

  render = () => {
    let { textDemo,  textDemo2, activeToggler } = this.state;
    let { changeHandler } = this;
    return(
      <div className="wrap">
        <h1> Lesson 3: PropTypes, ControlledComponents, AdvancedChild Methods, Refs</h1>

        {
          // Demo 1 -> PropTypes
          // <CompWithPropTypes
          //   type="Foo"
          //   ReactEl={<ComponentToSend/>}
          //   someStuff={{one:'one'}}
          //   action={()=>{console.log('do smsng')}}
          //   arrayProp={[]}
          //   somethingTrue={true}
          //   stringProp="String"
          //   user ={{
          //     name: '123'
          //   }}
          // >
          //   <ComponentToSend/>
          // </CompWithPropTypes>
        }
        {
          // Demo 2: AdvancedChild
          // <AdvancedChild myProp="123">
          //   "i', string"
          //   <ComponentToSend/>
          //   <ComponentToSend/>
          //   <ComponentToSend/>
          //   <ComponentToSend/>
          // </AdvancedChild>
          // <Toggler
          //   name="Choose layout"
          //   activeToggler={activeToggler}
          //   changeStatus={this.changeStatus}>
          //   <TogglerItem name="left"/>
          //   <TogglerItem name="center"/>
          //   <TogglerItem name="right"/>
          // </Toggler>
        }

        {
          // Demo 3
          // <Ref/>
        }

      </div>
    );
  }
}
/*

*/
export default App;
