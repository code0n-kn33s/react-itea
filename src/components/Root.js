import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import { Provider } from 'react-redux'
import { createStore } from 'redux'

import rootReducer from '../reducers'
import App from './App';

import store from '../redux/store';

const supportsHistory = 'pushState' in window.history;
// const store = createStore(rootReducer)

class Root extends Component {
  render() {
    return (
      <Provider store={store}>

        <BrowserRouter forceRefresh={!supportsHistory}>
          <Route component={App} />
        </BrowserRouter>

      </Provider>
    );
  }
}

export default Root;
