import React, { Component } from 'react';
// import './App.css';

import { Provider } from 'react-redux';

import store from '../redux/store';
import List from './ComponentWithAsync';

import Students from './students';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
            <h1> Hello from react-redux application</h1>
            <Students/>
            <List />
        </div>
      </Provider>
    );
  }
}

export default App;
