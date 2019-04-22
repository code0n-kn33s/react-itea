import React, { Component } from 'react';

import { Route, NavLink,  Switch, Prompt } from 'react-router-dom';


const Contacts = () => (
  <div>
    <h2>Contacts</h2>
    <NavLink to="/">Main</NavLink>
    <NavLink to="/contacts">Contacts</NavLink>
    <NavLink to="/contacts/1">Contacts Sub</NavLink>

    <Switch>
      <Route path="/contacts" render={ () => (
        <div>
          <h1>Contacts</h1>
          <Prompt when={true} message="You sure wanna to leave that page?" />
        </div>
      )} />
      <Route path="/contacts/1" render={ () => ( <h1> Leave page </h1>)} />
    </Switch>

  </div>
)

export default Contacts;
