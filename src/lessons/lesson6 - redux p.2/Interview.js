import React, { Component } from 'react'

import { ListSubject } from './Subjects'

class Interview extends Component {
  state = {
    posts: []
  }
  componentDidMount () {
    fetch("https://rickandmortyapi.com/api/character/?page=10")
      .then(res => res.json() )
      .then(res => res.interviewed= false)
      .then(res => this.setState({posts: res}))
  }
  render() {
    const posts = this.state.posts.results
    return (
      <>
        {
          !posts ?
          <div>LOADING</div> :
          posts.map( post => (
            <ListSubject key={post.id} data={post}/>
          ))
        }
      </>
    )
  }
}

export default Interview