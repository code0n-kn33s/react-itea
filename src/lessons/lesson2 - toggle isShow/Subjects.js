import React from 'react'

export const ListSubject = ({data}) => {
  console.log(data);
  return (
    <div
      className="list-item"
      style={{display: 'inline-block', border: '1px solid', paddign: '5px', margin: '5px'}}
    >
      <h3>{data.name}</h3>
      <div>{data.species}</div>
      <img src={data.image} alt={data.name}/>
      <h4>Location :</h4>
      <div>{data.location.name}</div>
    </div>
  )
}