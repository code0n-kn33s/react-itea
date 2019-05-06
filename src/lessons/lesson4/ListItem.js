import React, { Component } from 'react'

class ListItem extends Component {
  render() {
    const { id, title, userId} = this.props.data;
    return (
      <div style={{ display: 'inline-block', padding: '5px', border: '1px solid', margin: '5px'}}>
        <div>id - {id}</div>
        <div>ListItem - {title}</div>
        <div>ListItem - {userId}</div>
      </div>
    )
  }
}

export default ListItem;
