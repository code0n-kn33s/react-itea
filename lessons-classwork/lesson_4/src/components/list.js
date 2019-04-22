import React, { Component } from 'react';
import { Route, Switch, Link, NavLink } from 'react-router-dom';

class List extends Component {
  state = {
    data: [],
    loaded: false,
    loading: false,
    errors: []
  }

  componentDidMount(){

    fetch('http://www.json-generator.com/api/json/get/cuKKbBWWXm?indent=2')
      .then( res => res.json() )
      .then( res => {
        this.setState({
          data: res,
          loaded: true
        })
      })

  }

  render(){
    let { loaded, data } = this.state;
    if(loaded){
      return(
        <div>
          <h1>Super List</h1>
          <Switch>
            <Route path="/list/full" exact render={ () => (
              <ul>
                {data.map( (artist, key) => (<li key={key}>{artist.name}</li>))}
              </ul>
            )}/>
            <Route path="/list/half" exact render={ () => (<h2>Half of list</h2>)}/>
          </Switch>

        </div>
      )
    } else {
      return(
        <div><h1> Loading... </h1></div>
      )
    }

  }
}

export default List;
