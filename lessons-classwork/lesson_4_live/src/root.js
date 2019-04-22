import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import './App.css';
import App from './App';


const supportsHistory = 'pushState' in window.history;


class Root extends Component {
  render() {
    return (
      <BrowserRouter forceRefresh={!supportsHistory}>
          <Route component={App}/>
      </BrowserRouter> 
    );
  }
}

export default Root;
