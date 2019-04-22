import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

class Main extends Component {
  render() {
    return (
      <div>
        <h1>Welcome to react-router v4</h1>
        <div className="navigateLinks">
          <Link to={{
            pathname:"/",
            state: {
              background: 'red'
            }

          }}>Main Page </Link>
          <Link to="/home">Home</Link>
          <Link to="/exact">Exact</Link>
          <Link to="/exact/2">Exact / 2</Link>
          <Link to={{
            pathname: "/post/2",
            // state находится в компоненте в props.loaction.state
            state: {
                background: 'red'
            }}
          }>Post 2</Link>
          <Link to="/post/3">Post 3</Link>
          <Link to="/post/4">Post 4</Link>
        </div>
      </div>
    );
  }
}

export default Main;
