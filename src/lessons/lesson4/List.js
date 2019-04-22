import React, { Component } from 'react'


import ListItem from './ListItem';

// console.log(Module );

class List extends Component {

  state = {
    list: null
  }

  componentDidMount() { 
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then( res => res.json() )
      .then( res => this.setState({ list: res }) );
  }

  render() {
    const { list } = this.state;
    return (
      <>
        {
          // list !== null &&
          //   list.map( item => {
          //     return(
          //       <ListItem key={item.id} data={item}/>
          //     )
          //   })
        }

      </>
    )
  }
}

export default List;