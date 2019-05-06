import React from 'react'
import { FaBeer } from 'react-icons/fa';

const Head = ( { title } ) => {
  let listSubGuests = 'Список жертв'
  return (
    <div className="guests-header" style={{
      display: 'flex',
      justifyContent: 'space-around',
      verticalAlign: 'center'
    }}>
      <div className="guests-header-title" style={{
        display: 'inline-block',
        position: 'relative'
      }}>
        <h1 className="guests-header-title-text" style={{
          color: '#424040',
          paddingBottom: '10px',
          fontWeight: 'bold',
          fontSize: '34px',
          marginBottom: 0
        }}>{ title }</h1>
        <div className="guests-header-subtitle" style={{
          position: 'absolute',
          right: '-50px',
          top: '20px',
          transform: 'rotate(10deg)',
          textDecoration: 'line-through',
          color: 'red',
          fontWeight: 'bold'
        }}>{listSubGuests}</div>
      </div>
      <button style={{
        background: 'greenyellow',
        height: '70px',
        width: '70px',
        color: 'white'
      }
      }> <FaBeer style={{ fontSize: '40px'}}/> </button>
    </div>
  )
}

export default Head