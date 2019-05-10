import React, { Component } from 'react'
import { NavLink, Switch, Route } from 'react-router-dom'

import ToggleDisplay from './ToggleDisplay'
import TableComp from './TableComp'

class App extends Component {
  render () {
    return (
    <>
      <div className="header">
      <h1>Lesson-4</h1>
        <ul className="nav-links">
          <li>
            <NavLink to='/lesson/2'>Toggle Display</NavLink>
          </li>
          <li>
            <NavLink to='/lesson/2/about'>Create Table</NavLink>
          </li>
        </ul>
      </div>
      <Switch>
        <Route exact path="/lesson/2" component={ToggleDisplay}/>
        <Route exact path="/lesson/2/about" component={TableComp}/>
      </Switch>
    </>
) }
}
export default App