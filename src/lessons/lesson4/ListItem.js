import React, { Component } from 'react'

class ListItem extends Component {
  render() {
    const { id, body, title, userId} = this.props.data;
    return (
      <>
        <div>ListItem - {id}</div>
        <div>ListItem - {body}</div>
        <div>ListItem - {title}</div>
        <div>ListItem - {userId}</div>
      </>
    )
  }
}

export default ListItem;
