import React from 'react';
import { Switch, Route, Link, NavLink } from 'react-router-dom';

const Post = (params) => {
  return (<h1>Hello {params.match.params.id}</h1>);
};

const Posts = (params) => {
  return(
    <div>
      <div>
        <NavLink to="/post/1" activeClassName="active"> Post 1</NavLink>
        <NavLink to="/post/2" activeClassName="active"> Post 2</NavLink>
        <NavLink to="/post/3" activeClassName="active"> Post 3</NavLink>
        <NavLink to="/post/4" activeClassName="active"> Post 4</NavLink>
        <NavLink to="/post/5" activeClassName="active"> Post 5</NavLink>
      </div>

      <Switch>
        <Route path="/post/1" render={ () => {
          return (<h1>Exact Route 11</h1>);}
        }/>
        <Route path="/post/2" render={ () => {
          return (<h1>Exact Route 2</h1>);}
        }/>
        <Route path="/post/3" render={ () => {
          return (<h1>Exact Route 3</h1>);}
        }/>
      </Switch>


    </div>
  );
};

export default Posts;
