import React, { Component } from 'react';

class UserItem extends Component {

  state = {
    arrived: false
  }
  // Check users!
  checkUser = (e) => {
    console.log('check', e.target.checked );
    this.setState({ arrived: e.target.checked })
  }

  render = () => {

    console.log( this.state );
    const { arrived } = this.state;
    const { guest } = this.props;
    const { checkUser } = this;
    return(
      <div
        className={ arrived ? 'user_item arrived' : 'user_item'}
      >
        { guest.name }
        <input type="checkbox" onChange={checkUser}/>
      </div>
    )
  }
}

export default UserItem;
