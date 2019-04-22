import React, { Component } from 'react'

class ListItem extends Component {
  render() {
    let { id, userId, title, body} = this.props.list
    // console.log(this.props);
    return (
      <tr>
        <td>{id}</td>
        <td>{userId}</td>
        <td>{title}</td>
        <td>{body}</td>
      </tr>
    )
  }
}

export default ListItem