import React from 'react';

import '../App.css';

import { BrowserRouter, HashRouter, MemoryRouter, Route, Redirect, Switch, Link, NavLink, Prompt } from 'react-router-dom';

import PrivateRoute from '../components/privateRoute';

const Test = () => (<h2> Test </h2>)
const Test1 = () => (<h2> Test1 </h2>)
const Test2 = () => (<h2> Test2 </h2>)
const noFound = () => (<h2> 404 </h2>)
const Secret = () => (<h2> Secret! </h2>)

const Routes = [
  {
    path: '/',
    exact: true,
    component: Test,
  },
  {
    path: '/home',
    component: Test1
  },
  {
    path: '/post/:id',
    component: Test2
  },
  {
    component: noFound,
    exact: true
  }
];

const Root = () => {
  return(
    <div>
      <h1> Hello i'm Groot! </h1>
      <BrowserRouter>
        <div>
          <header>
            <NavLink activeClassName="selected" exact to="/"> Main Page </NavLink>
            <NavLink activeClassName="selected" to="/one/"> One </NavLink>
            <NavLink activeClassName="selected" to="/two"> Two </NavLink>
            <NavLink activeClassName="selected" to="/ome"> Ome </NavLink>
            <NavLink
              title="123"
              to={{
              pathname: "/three",
              search: "?sort=name",
              hash: "#the-hash",
              state: { fromDashboard: true }
            }}> Super </NavLink>
            <NavLink to="/contacts">Contacts</NavLink>
            <NavLink to="/contacts/1">Contacts Sub</NavLink>
          </header>

          <Switch>
            <Route path="/posts/:postid" render={
              (props) => (<h1>Post #{props.match.params.postid}</h1>)
            }/>
            <Redirect from="/one" to="/four"/>
            {
              Routes.map( (route, index ) => {
                console.log( 'index', index, route);
                return <Route key={index} {...route} />;
              })
            }
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  )

}


export default Root;
