import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect, Link, NavLink } from 'react-router-dom'


import page1 from './pages/page1';
import page2 from './pages/page2';
import page3 from './pages/page3';

import page from './pages';
import NotFound from './pages/notFound';

import rootRoutes from './RootRoutes';

class App extends Component{
    render(){
      return(
        <div>
           <header>
            <NavLink exact activeClassName="selected" to="/">Main Page</NavLink>
            <NavLink exact activeClassName="selected" to="/page/1">Page 1</NavLink>
            <NavLink exact activeClassName="selected" to="/page/2">Page 2</NavLink>
            <NavLink exact activeClassName="selected" to="/page/3">Page 3</NavLink>
            <NavLink exact activeClassName="selected" to={{
              pathname: "/page/3",
              search: "?sort=name",
              hash: "#the-hash",
              state: { color: 'red' }
            }}> With Props </NavLink>
          </header>
          <Switch key={this.props.location.key}>
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
      );
    }
}

export default App;


