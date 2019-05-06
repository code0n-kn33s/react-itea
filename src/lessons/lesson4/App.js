import React from 'react'
import { NavLink, Switch, Route } from 'react-router-dom'

import List from './List'
import About from './pages/About'
import Contacts from './pages/Contacts'

const App = () => (
    <>
      <div className="header">
      <h1>Lesson-4</h1>
        <ul className="nav-links">
          <li>
            <NavLink to='/lesson/4'>List</NavLink>
          </li>
          <li>
            <NavLink to='/lesson/4/about'>About</NavLink>
          </li>
          <li>
            <NavLink to='/lesson/4/contacts'>Contacts</NavLink>
          </li>
        </ul>
      </div>
      <Switch>
        <Route exact path="/lesson/4" component={List}/>
        <Route exact path="/lesson/4/about" component={About}/>
        <Route exact path="/lesson/4/contacts" component={Contacts}/>
      </Switch>
    </>
);

export default App