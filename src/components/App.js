import React, { Component } from 'react'
import { Switch, Route, NavLink } from 'react-router-dom'

import rootRoutes from './RootRoutes'

class App extends Component {
  render() {
    return (
      <>
        <header>
          <ul className="nav-links">
            <li>
              <NavLink exact to="/">Урок 1</NavLink>
            </li>
            <li>
              <NavLink to="/lesson/2">Урок 2</NavLink>
            </li>
            <li>
              <NavLink to="/lesson/3">Урок 3</NavLink>
            </li>
            <li>
              <NavLink to="/lesson/4">Урок 4</NavLink>
            </li>
            <li>
              <NavLink to="/lesson/5">Урок 5</NavLink>
            </li>
            <li>
              <NavLink to="/lesson/6">Урок 6</NavLink>
            </li>
          </ul>
        </header>
        <hr/>
        <div className="content">
          <Switch>
            {
              rootRoutes.map( (route, index) => (
                <Route
                  key={index}
                  {...route}
                />
              ))
            }
          </Switch>
        </div>
      </>
    )
  }
}

export default App