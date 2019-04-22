import React, { Component } from 'react'
import { Route, Switch, NavLink } from 'react-router-dom'

import List from './List'
import { Tasks } from './Tasks'

class App extends Component {
  render () {
    return (
    <>
      <ul className="nav-links">
        <li>
            <NavLink to='/lesson/3'>К списку</NavLink>
        </li>
        <li>
            <NavLink to='/lesson/3/tasks'>Задания</NavLink>
        </li>
      </ul>
      <br/>
      <Switch>
          <Route exact path="/lesson/3" component={List}/>
          <Route exact path="/lesson/3/tasks" component={Tasks}/>
      </Switch>
    </>
    )
  }
}

export default App