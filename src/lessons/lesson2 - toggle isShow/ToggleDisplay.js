import React, { Component } from 'react'

import Button from './Button'
import { Toggler, TogglerItem } from './Toggler'


class ToggleDisplay extends Component {
  state = {
    // display
    isShow: true,
    // button component
    activeState: true,
    bdColor: ' cyan ',
    someText: ' New text button ',
    bodyText: ' Old text to body ',
    // toggler
    activeToggler: "left"
  }

  buttonAction = (e) => {
    this.setState( { activeState: !this.state.activeState })

    if (this.state.activeState) {
      e.target.innerHTML = this.state.someText
      this.setState({ bodyText: " New text to body " })
      e.target.style.background = this.state.bdColor
    } else {
      e.target.innerHTML = Button.defaultProps.textValue
      this.setState({ bodyText: " Old text to body " })
      e.target.style.background = Button.defaultProps.style.background
    }
  }

  toggleDisplay = () => {
    this.setState({ isShow: !this.state.isShow })
  }

  changeStatus = (event) => {
    let TogglerValue = event.target.dataset.value;
    this.setState({
        activeToggler: TogglerValue
      });
  }

  render = () => (
    <>
      {/* show and hide text block */}
      <h3>ToggleDisplay</h3>
      <button onClick={ this.toggleDisplay }>
        { this.state.isShow ? 'Close description' : 'Open description'}
      </button>
      <hr/>
      {
        this.state.isShow &&
        (
          <div className="list-item" style={{ width: '50%' }}>
            Lesson2 description
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil vel aspernatur dolor non veritatis molestias. Quidem distinctio necessitatibus ad neque itaque impedit. Amet placeat non fugiat consequatur quibusdam veniam quisquam?
          </div>
        )
      }
      <hr/>
      {/* Button with default styles and action */}
      <h3>ToggleButton with default properties</h3>
      <Button action={ this.buttonAction }  />
      <div className="body-text"> { this.bodyText } </div>
      <hr/>
      {/* Toggler - tabs */}
      <Toggler
        name="Choose layout"
        activeToggler={this.state.activeToggler}
        changeStatus={this.changeStatus}>
        <TogglerItem name="left"/>
        <TogglerItem name="center"/>
        <TogglerItem name="right"/>
      </Toggler>
    </>
  )
}

export default ToggleDisplay