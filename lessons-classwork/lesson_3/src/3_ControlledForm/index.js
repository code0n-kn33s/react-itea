import React, { Component } from 'react';
import {Toggler, TogglerItem} from '../2_AdvancedChild/toggler';

class ControlledForm extends Component{

  state = {
    data: {
      user: "Null",
      password: "",
      lang: "",
      activeToggler: "left"
    }
  };

  changeStatus = (event) => {
    let TogglerValue = event.target.dataset.value;
    this.setState({
      data:{
        ...this.state.data,
        activeToggler: TogglerValue
      }});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log('submitted data',this.state.data);
  }

  handleFormChange = event => {
    console.log(event.target);
    let value = event.target.value;
    let name = event.target.name;

    this.setState({
      data:{
        ...this.state.data,
        [name]: value
      }});
  }

  render = () => {
    let {activeToggler, user, password, lang } = this.state.data;

    return (
      <div className="App">
        <h1>My Form Component</h1>

        <form onSubmit={this.handleSubmit} autoComplete="off">
          <label>
            <div>User name</div>
            <input
              type="text"
              name="user"
              onChange={this.handleFormChange}
              autocomplite="false"
              value={user}
            />
          </label>
          <label>
            <div>Password</div>
            <input
              type="password"
              name="password"
              onChange={this.handleFormChange}
            />
          </label>
          <label>
            <div>Favorite programming language</div>
            <input
              type="text"
              name="lang"
              onChange={this.handleFormChange}
            />
          </label>

        <Toggler
          name="Choose layout"
          activeToggler={activeToggler}
          changeStatus={this.changeStatus}
        >
            <TogglerItem name="left"/>
            <TogglerItem name="center"/>
            <TogglerItem name="right"/>
        </Toggler>



          <button type="submit">Send</button>
        </form>
      </div>
    )
  }

}


export default ControlledForm;
