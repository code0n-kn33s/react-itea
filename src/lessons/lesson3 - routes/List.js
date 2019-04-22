import React, { Component } from 'react'
import ListItem from './ListItem'

class List extends Component {
  state = {
    list: null
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then( res => res.json() )
      .then( res => this.setState({list: res}))
  }
  render() {
    const { list } = this.state;
    if( list !== null){
      console.log(list[0]);
    }
    return (
      <>
        <h1>List Component</h1>
        <table>
          <tbody>
            <tr>
              <th>id</th>
              <th>user-id</th>
              <th>title</th>
              <th>body</th>
            </tr>
            {
              list !== null && list.map(item => ( <ListItem key={item.id} list={item} />) )
            }
          </tbody>
        </table>
      </>
    )
  }
}

export default List