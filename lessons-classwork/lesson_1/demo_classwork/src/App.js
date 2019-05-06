import React, { Component } from 'react';

import 'normalize.css';
import './App.css';

import data from './guests.json';

import GuestItem from './guest_item';
import Test from './test';

class GuestList extends Component{

  state = {
    users: data
  }

  filterGuest = (e) => {

    let query = e.target.value.toLowerCase();
    let filteredArray = data.filter( guest => {
      let guestName = guest.name.toLowerCase();
      if(  guestName.indexOf(query) !== -1 ){
        return guest;
      }
    });

    this.setState({
      users: filteredArray
    })
  }

  render = () => {
    const { users, value } = this.state;
    const { filterGuest } = this;

    return(
        <div className="wrap">
          <h1> GuestList </h1>
          <Test message="Hello i'm react component too" />
          <div>
            <input onChange={filterGuest} placeholder="Username to search"/>
          </div>
          {
            users.length !== 0 ?
            (
              <div>

                {
                  users.map( (guest, key) =>
                  <GuestItem
                    key={key}
                    guest={guest}
                    nation="ukrainian"
                  /> )
                }
              </div>
            ) :
            (
              <div> Сорри таких гостей нету :( </div>
            )
          }


        </div>
    );


  }

}

export default GuestList;
