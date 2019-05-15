import React from 'react'
import styled from 'styled-components'

const StyledComp = styled.div`
  button {
    font-size: 18px;
    padding: 10px 20px;
    border-radius: 2px;
    margin-bottom: 10px;
    :hover {
      background-color: grey;
      color: white;
    }
  }
  .styled-paragraph {
    border-left: 4px solid lightseagreen;
    margin: 0px 0 0 20px;
    padding: 10px 10px;
    background: lightgoldenrodyellow

  }
`

export default class ShowDisplay extends React.Component {
  state = {
    isActive: false
  }
  showAndHide = () => {
    this.setState( { isActive : !this.state.isActive} )
  }
  render () {
    return (
      <StyledComp>
        <button onClick={this.showAndHide}>
          { this.state.isActive ?
            'hide task' : 'show task'
          }
        </button>

        { this.state.isActive ?
          <div className="styled-paragraph">
          { this.props.children } </div> : ''
        }
      </StyledComp>
  )
}
}