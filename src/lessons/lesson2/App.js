import React, { Component } from 'react'
import './style.css'

class App extends Component {
  state = {
    isShow: true
  }
  toggleDisplay = () => {
    this.setState({
      isShow: !this.state.isShow
    })
  }
  render = () => (
    <div>
      <h3>Lesson2 works</h3>
      <button onClick={ this.toggleDisplay }>
        { this.state.isShow ? 'Close description' : 'Open description'}
      </button>
      {
        this.state.isShow &&
        (
          <div>
            Lesson2 description
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil vel aspernatur dolor non veritatis molestias. Quidem distinctio necessitatibus ad neque itaque impedit. Amet placeat non fugiat consequatur quibusdam veniam quisquam?
          </div>
        )
      }

    </div>
  )
}

export default App