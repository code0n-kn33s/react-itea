import React, {Component} from 'react'

import Article from './Article'
import GuestList from './GuestList'
import ApiGuests from '../../json/guests.json'
import ActiveGuest from './ActiveGuest'
import SearchGuests from './SearchGuests'

import './style.css'

const isFindFn = (objPart, value) => {
  let isFindx = false;

  if (typeof (objPart) === 'object') {

    for (let key in objPart) {
      isFindx = isFindFn(objPart[key], value);
    }
  }

  if (typeof (objPart) === 'string') {
    if (objPart.toLowerCase().indexOf(value) !== -1) {
      isFindx = true;
    }
  }

  if (typeof (objPart) === 'number') {
    if (objPart.toString().indexOf(value) !== -1) {
      isFindx = true;
    }
  }
  return isFindx;
}

class App extends Component {
  state = {
    data: ApiGuests,
    viewGuest: ApiGuests[0]
  }
  filterGuests = (e) => {
    const val = e.target.value.toLowerCase();

   let result = ApiGuests.filter( item => {
      let isFind = false;

      for( let key in item){
        if (isFindFn(item[key], val) ){
          isFind = true;
        }
      }
      return isFind;
    });
    this.setState({
      data: result
    })
  }
  loadGuests = (guests) => {
    this.setState({ data: guests })
  }
  updateData = (config) => {
    this.setState(config)
  }
  selectUser = ( guest ) => (e) => {
    this.setState({
      viewGuest: guest
    });
  }
  clearGuests = () => {
    this.setState({ data: [] })
  }
  isArrived = ( guest ) => (e) => {
    e.stopPropagation();
    let newArray = this.state.data.map( item =>{
      if (item._id === guest._id){
        item.isActive = !item.isActive;
      }
      return item;
    });

    this.setState({ data: newArray })
  }

  isShowDescription = (display) => (e) => {
    // display === false = !display
    display = true
    console.log('DISP APP', display);
  }

  render = () => (
    <div className="content-wrapper">
      <Article title='Список гостей'/>
      <SearchGuests filterAction={this.filterGuests}/>
      <div className="list-content">
        {
          this.state.viewGuest !== null && (
            <ActiveGuest
              data={this.state.viewGuest}
            />
          )
        }
        <GuestList
          data={this.state.data}
          update={this.selectUser}
          arrived={this.isArrived}
          showDescription={this.isShowDescription}
        />
      </div>
    </div>
  )
}

export default App

