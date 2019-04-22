import React, {Component} from 'react'

import StudentsCount from './StudentsCount'
import ListArticles from './ListArticles';

class App extends Component {
  render() {
    return (
      <>
        <StudentsCount />
        <ListArticles />
      </>
    )
  }
}

export default App