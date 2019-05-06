import React, { Component } from 'react'
import { NavLink, Switch, Route } from 'react-router-dom'

import ToggleDisplay from './ToggleDisplay'
import ImagePreloader from './ImagePreloader'

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
            <NavLink to='/lesson/2/about'>Image Preloader</NavLink>
          </li>
        </ul>
      </div>
      <Switch>
        <Route exact path="/lesson/2" component={ToggleDisplay}/>
        <Route exact path="/lesson/2/about" component={ImagePreloader}/>
      </Switch>
    </>
) }
}
export default App