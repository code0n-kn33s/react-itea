import React, { Component } from 'react'

import Button from './Button'

class ToggleDisplay extends Component {
  state = {
    activeState: true,
    bdColor: ' cyan ',
    someText: ' New text button ',
    bodyText: ' Old text to body ',
    isShow: true
  }

  buttonAction = (e) => {
    this.setState( { activeState: !this.state.activeState })

    if (this.state.activeState) {
      e.target.innerHTML = this.state.someText
      this.setState({ bodyText: " New text to body " })
      e.target.style.borderColor = this.state.bdColor
    } else {
      e.target.innerHTML = Button.defaultProps.textValue
      this.setState({ bodyText: " Old text to body " })
      e.target.style.borderColor = Button.defaultProps.style.borderColor
    }
  }

  toggleDisplay = () => {
    this.setState({ isShow: !this.state.isShow })
  }
  render = () => (
    <>
      <h3>ToggleDisplay</h3>
      <button onClick={ this.toggleDisplay }>
        { this.state.isShow ? 'Close description' : 'Open description'}
      </button><br/>
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
      <h3>ToggleButton with default properties</h3>
      <Button action={ this.buttonAction } style={{borderColor: 'cyan'}} />
      <div className="body-text"> { this.bodyText } </div>
    </>
  )
}

export default ToggleDisplay